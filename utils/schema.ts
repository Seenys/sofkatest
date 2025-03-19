import { z } from "zod";
import { verifyProductId } from "../services/api";

const dateSchema = z.string().refine((date) => !isNaN(Date.parse(date)), {
  message: "Formato de fecha inválido",
});

// Esquema base para el producto
export const productSchema = z.object({
  id: z
    .string()
    .min(3, "El ID debe tener al menos 3 caracteres")
    .max(10, "El ID no puede tener más de 10 caracteres")
    .refine(async (id) => !(await verifyProductId(id)), {
      message: "El ID ya existe",
    }),
  name: z
    .string()
    .min(6, "El nombre debe tener al menos 6 caracteres")
    .max(100, "El nombre no puede tener más de 100 caracteres"),
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres")
    .max(200, "La descripción no puede tener más de 200 caracteres"),
  logo: z.string().nonempty("El logo es requerido"),
  date_release: dateSchema.refine((date) => {
    const releaseDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return releaseDate >= today;
  }, "La fecha de liberación debe ser igual o mayor a la fecha actual"),
  date_revision: dateSchema,
});

export type ProductFormData = z.infer<typeof productSchema>;
