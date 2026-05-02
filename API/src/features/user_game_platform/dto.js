import z from "zod";

export const createUGP_DTO = z.object({
  user: z.coerce
    .number({ message: "O Id do usuário deve ser um número inteiro!" })
    .int()
    .positive({ message: "O Id do usuário deve ser maior que 0 (zero)!" }),
  game_platform: z.coerce
    .number({
      message: "O Id do jogo em plataforma deve ser um número inteiro!",
    })
    .int()
    .positive({
      message: "O Id do jogo em plataforma deve ser maior que 0 (zero)!",
    }),
  status: z
    .enum(["lista de desejos", "jogando", "zerado", "100%", "replay"], {
      message: "Status inválido!",
    })
    .default("lista de desejos"),
  nota: z.coerce
    .number({ message: "A nota deve ser um número inteiro!" })
    .int()
    .min(1, { message: "A nota deve ser no mínimo 1!" })
    .max(10, { message: "A nota deve ser no máximo 10!" })
    .optional(),

  ranking: z.coerce
    .number({ message: "O ranking deve ser um número inteiro!" })
    .int()
    .nonnegative({ message: "O ranking deve ser maior ou igual a 0!" })
    .optional(),
});

export const updateUGP_DTO = createUGP_DTO.partial();

export const idDTO = z.object({
  id: z.coerce
    .number({ message: "O Id deve ser um número inteiro!" })
    .int()
    .positive({ message: "O Id deve ser maior que 0 (zero)!" }),
});
