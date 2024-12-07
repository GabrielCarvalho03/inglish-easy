import { z } from "zod";

export const schemaRegister = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(11, "Telefone inválido"),
  RegisterInList: z.boolean().default(true),
});

export type DateFormRegister = z.infer<typeof schemaRegister>;
