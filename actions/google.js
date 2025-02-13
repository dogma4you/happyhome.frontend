"use server";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export default async function google() {
  try {
    return signIn("google", {
      callbackUrl: "",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          return { error: "Invalid credentials" };
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
