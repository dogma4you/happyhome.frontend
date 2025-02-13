import { z } from "zod";

export const nameValidations = z.object({
  first_name: z.string({ message: "First name is required" }),
  last_name: z.string({ message: "Last name is required" }),
});

export const emailValidations = z.object({
  email: z.string({ message: "email is required" }).email(),
});

export const phoneValidations = z.object({
  phone: z.string({ message: "Phone number is required" }),
});

export const registerValidation = z
  .object({
    password: z
      .string({ message: "Password is required" })
      .min(8, "Password must be at least 8 characters"),
    confirm_password: z.string({ message: "Confirm password is required" }),
    accept_terms: z.boolean({ message: "Accept terms is required" }),
  })
  .merge(nameValidations)
  .merge(emailValidations)
  .merge(phoneValidations)
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // Path of error
  });

export const loginValidation = z.object({
  email: z.string({ message: "Email is required" }).email(),
  password: z
    .string({ message: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
});

export const forgotPasswordValidation = z.object({
  email: z.string({ message: "Email is required" }).email(),
});

export const resetPasswordValidation = z
  .object({
    password: z
      .string({ message: "Password is required" })
      .min(8, "Password must be at least 8 characters"),
    confirm_password: z.string({ message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // Path of error
  });
