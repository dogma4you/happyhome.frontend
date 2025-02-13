"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export default async function registration({
  firstName,
  lastName,
  email,
  password,
  phone,
  code,
}) {
  try {
    return await signIn("credentials", {
      redirect: true,
      isRegistration: true,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone: phone,
      code: code,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.code === "custom") {
        return { error: true, message: error.errorMessage };
      }
      switch (error.type) {
        case "CredentialsSignin": {
          console.log("error", error);
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
