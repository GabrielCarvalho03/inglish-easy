import { z } from "zod";

export const schemaPayment = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(11, "Telefone inválido"),
  price: z.string().default(""),
});

export type DateFormPayment = z.infer<typeof schemaPayment>;
