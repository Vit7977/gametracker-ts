import z from "zod";

export const createGameDTO = z.object({
  titulo: z.string().trim().min(1, { message: "O titulo é obrigatório!" }),

  capa: z
    .string()
    .trim()
    .min(1, { message: "A capa é obrigatória!" })
    .pipe(z.url({ message: "A capa deve ser uma URL válida!" })),

  descricao: z.string().trim().optional(),

  data_lancamento: z
    .string()
    .date({ message: "A data deve ser uma data válida!" })
    .refine((val) => val <= new Date().toISOString().split("T")[0], {
      message: "A data de lançamento não pode ser no futuro!",
    }),

  genero: z
    .string()
    .trim()
    .min(3, { message: "O genero deve ter no mínimo 3 caracteres!" }),

  tempo_estimado: z.coerce
    .number()
    .int({ message: "O tempo estimado deve ser um número inteiro!" }),
});

export const updateGameDTO = createGameDTO.partial();

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
