import NextAuth, { AuthError } from "next-auth";
import Credential from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import serverSideFetch from "@/lib/serverSideFetch";
import { cookies as cookiesNext } from "next/headers";

class CustomError extends AuthError {
  code = "custom";

  constructor(message, errorOptions) {
    super(message, errorOptions);
    this.errorMessage = message;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credential({
      async authorize(credentials) {
        try {
          const { isRegistration, callbackUrl, ...restCredentials } =
            credentials;

          const url = isRegistration ? "/auth/register" : "/auth/login";
          const loginResponse = await serverSideFetch(
            "post",
            url,
            restCredentials,
          );

          if (loginResponse?.error) {
            throw new CustomError(loginResponse.message);
          }

          const cookies = cookiesNext();
          cookies.set("accessToken", loginResponse.data.token);
          cookies.set("refresh_token", loginResponse.data.refresh_token);

          return {
            accessToken: loginResponse.data.token,
            refreshToken: loginResponse.data.refresh_token,
          };
        } catch (e) {
          if (e instanceof CustomError) {
            throw new CustomError(e.errorMessage);
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      const cookies = cookiesNext();
      const accessToken = cookies.get("accessToken")?.value;
      const refreshToken = cookies.get("refresh_token")?.value;

      let userSelfResponse;
      if (trigger === "signIn" && !session) {
        userSelfResponse = await serverSideFetch("get", "/user/self");
      }

      if (trigger === "update" && session) {
        return session.user;
      }
      if (accessToken && refreshToken) {
        token.accessToken = accessToken;
        token.refreshToken = refreshToken;
      }

      if (userSelfResponse) {
        token = { ...token, ...userSelfResponse.data };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const res = await serverSideFetch("post", "/auth/social_login", {
          email: profile.email,
          first_name: profile.given_name,
          last_name: profile.family_name,
          avatar: profile.picture,
        });

        if (res.error) {
          return false;
        }

        const cookies = cookiesNext();
        cookies.set("accessToken", res.data.token);
        cookies.set("refresh_token", res.data.refresh_token);

        return true;
      }
      return true;
    },
  },
  trustHost: true,
});
