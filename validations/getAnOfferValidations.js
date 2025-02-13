import { z } from "zod";

export const addressValidation = z.object({
  address: z
    .object({
      country: z.string().nullable().optional(),
      city: z.string().nullable().optional(),
      state: z.string().nullable().optional(),
      postal_code: z.string().nullable().optional(),
      lat: z.number().nullable().optional(),
      lng: z.number().nullable().optional(),
      street: z.string().nullable().optional(),
      formatted_address: z.string().nullable().optional(),
    })
    .refine(
      (data) => {
        return Object.values(data).some((value) => {
          return value !== undefined && value !== "" && value !== null;
        });
      },
      {
        message: "Address is required",
        path: ["address"],
      },
    ),
});

export const getStartedViewValidation = addressValidation.extend({
  terms: z
    .boolean({ message: "You must accept the terms and conditions" })
    .refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
});

export const getStartedViewValidationGuest = getStartedViewValidation.extend({
  first_name: z.string({ message: "First name is required" }),
  last_name: z.string({ message: "Last name is required" }),
  email: z.string({ message: "email is required" }).email(),
  phone: z.string().optional(),
});

const propertySchema = z.object({
  id: z.number().nullable().optional(),
  square_feet: z.union([
    z.string().min(1, { message: "Square Feet is required" }),
    z.number().min(1, { message: "Square Feet is required" }),
  ]),
  bedrooms: z.number().min(1),
  bathrooms: z.number().min(1),
});

export const homePropertyValidation = z.object({
  builtYear: z.date({ message: "Year Built is required" }),
  areas: z.array(propertySchema).min(1),
});

export const homeBuiltDetailsValidation = z.object({
  heating: z
    .number({ message: "Heating is required" })
    .min(0, { message: "Heating is required" }),
  airConditioning: z
    .number({ message: "Air condition is required" })
    .min(0, { message: "Air condition is required" }),
  waterSupply: z
    .number({ message: "Water Supply is required" })
    .min(0, { message: "Water Supply is required" }),
  sewer: z
    .number({ message: "Sewer is required" })
    .min(0, { message: "Sewer is required" }),
  electricPanel: z
    .number({ message: "Electric panel is required" })
    .min(0, { message: "Electric panel is required" }),
  exteriorType: z.array(z.number()).min(1, "Exterior type is required"),
  lotSize: z.coerce
    .number({ message: "lot size is required" })
    .min(1, { message: "lot size is required" }),
  currentHOA: z
    .number({ message: "Current HOA is required" })
    .min(0, { message: "Current HOA is required" }),
});
