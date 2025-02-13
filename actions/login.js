"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export default async function login({ email, password }) {
  try {
    return await signIn("credentials", {
      redirect: true,
      email,
      password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.code === "custom") {
        return { error: true, message: error.errorMessage };
      }
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: true, message: "Invalid credentials" };
        }
        default:
          return {
            error: "Something went wrong",
          };
      }
    }

    throw error;
  }
}
