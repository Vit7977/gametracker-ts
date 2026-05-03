import z from "zod";

export const createSessionDTO = z.object({
  user_game_platform: z.coerce
    .number({
      message: "O Id de user_game_platform deve ser um número inteiro!",
    })
    .int()
    .positive({
      message: "O Id de user_game_platform deve ser maior que 0 (zero)!",
    }),
  data: z
    .string()
    .date({ message: "A data deve ser uma data válida!" })
    .refine((val) => val <= new Date().toISOString().split("T")[0], {
      message: "A data da sessão não pode ser no futuro!",
    }),
  duracao_min: z.coerce
    .number({ message: "A duração da sessão deve ser um número inteiro!" })
    .int()
    .nonnegative({
      message: "A duração da sessão deve ser maior ou igual a 0 (zero)!",
    }),

  progresso: z.coerce
    .number({ message: "O progresso deve ser um número inteiro!" })
    .int()
    .min(0, { message: "O progresso deve ser maior ou igual a 0!" })
    .max(100, { message: "O progresso deve ser menor ou igual a 100!" }),

  comentario: z
    .string()
    .max(500, {
      message: "O comentário deve ter no máximo 500 caracteres!",
    })
    .optional(),
});

export const updateSessionDTO = createSessionDTO.partial();

export const idDTO = z.object({
  id: z.coerce
    .number({ message: "O Id deve ser um número inteiro!" })
    .int()
    .positive({ message: "O Id deve ser maior que 0 (zero)!" }),
});
