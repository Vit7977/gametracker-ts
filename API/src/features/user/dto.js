import z from "zod";

export const createUserDTO = z.object({
  nome: z.string().min(1, { message: "O nome do usuário é obrigatório!" }),

  email: z
    .email({ message: "O email deve ser válido!" })
    .min(1, { message: "O email é obrigatório!" }),

  senha: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres!" }),

  avatar: z
    .string()
    .trim()
    .pipe(
      z.url({
        message: "O link da imagem de avatar deve ser uma URL válida!",
      }),
    )
    .optional(),
});

export const updateUserDTO = createUserDTO.partial();

export const loginDTO = z.object({
  email: z
    .email({ message: "O email deve ser válido!" })
    .min(1, { message: "O email é obrigatório!" }),

  senha: z
    .string()
    .min(6, { message: "A senha deve conter no mínimo 6 caracteres!" }),
});

export const idDTO = z.object({
  id: z.coerce
    .number()
    .int({ message: "O id deve ser um número inteiro!" })
    .positive({
      message: "O id deve ser um número positivo (maior que zero)!",
    }),
});
