import type { Game } from "../types/Game";
import { api } from "./api";

export const getGames = async (): Promise<Game[]> => {
  const response = await api.get(`/game`);
  return response.data.data;
};

export const createGame = async (game: Game) => {
  const response = await api.post(`/game`, {
    titulo: game.titulo,
    capa: game.capa,
    descricao: game.descricao,
    data_lancamento: game.data_lancamento,
    genero: game.genero,
    tempo_estimado: game.tempo_estimado,
  });
  return response.data;
};
