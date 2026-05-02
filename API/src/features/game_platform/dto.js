import z from "zod";

export const createGamePlatformDTO = z.object({
  platform: z.coerce
    .number({ message: "O Id da plataforma deve ser um número inteiro!" })
    .int()
    .positive({ message: "O Id da plataforma deve ser maior que 0 (zero)!" }),
  game: z.coerce
    .number({ message: "O Id do jogo deve ser um número inteiro!" })
    .int()
    .positive({ message: "O Id do jogo deve ser maior que 0 (zero)!" }),
});

export const updateGamePlatformDTO = createGamePlatformDTO.partial();

export const idDTO = z.object({
  id: z.coerce.number().int().positive({ message: "ID inválido!" }),
});
