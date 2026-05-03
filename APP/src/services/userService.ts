import { api } from "./api";
import type { User } from "../types/User";

export const createUser = async (user: User) => {
  const response = await api.post(`/user`, {
    nome: user.nome,
    email: user.email,
    senha: user.senha,
  });
  return response.data;
};

export const login = async (email: string, senha: string) => {
  const response = await api.post(`/user/login`, {
    email: email,
    senha: senha,
  });
  return response.data.data.token;
};
