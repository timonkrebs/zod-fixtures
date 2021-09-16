// Generated by ts-to-zod
import { z } from "zod";

export const heroAdressSchema = z.object({
  phone: z.array(z.number()),
});

export const heroContactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
  phoneNumber: z.string().regex(/^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$/),
  hasSuperPower: z.boolean(),
  age: z.number().min(0).max(500),
  adress: heroAdressSchema,
});
