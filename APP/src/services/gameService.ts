import type { Game } from "../types/Game";
import { api } from "./api";

export const getGames = async (): Promise<Game[]> => {
  const response = await api.get(`/game`);
  return response.data.data;
};
