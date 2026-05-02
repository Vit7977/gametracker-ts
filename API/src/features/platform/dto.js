import z from "zod";

export const createPlatformDTO = z.object({
  nome: z.string().min(3, {
    message: "O nome da plataforma deve ter ao menos 3 caracteres!",
  }),

  logo: z
    .string()
    .trim()
    .min(1, { message: "A logo da plataforma é obrigatória!" })
    .pipe(z.url({ message: "A logo da plataforma deve ser uma URL válida!" })),
});

export const updatePlatformDTO = createPlatformDTO.partial();

export const idDTO = z.object({
  id: z.coerce.number().int().positive({ message: "ID inválido!" }),
});
