import { z } from "zod";

export const balanceAmountValidation = z.object({
  amount: z.string({ message: "Amount is required" }),
});
