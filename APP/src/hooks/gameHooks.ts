import { useState, useEffect } from "react";
import type { Game } from "../types/Game";
import { createGame, getGames } from "../services/gameService";
import type { ApiError, HookResult } from "../types/HookTypes";
import { extractError } from "../utils/extractError";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGames(data);
    } catch (error) {
      console.log("Erro ao buscar jogos: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, loading, refresh: fetchGames };
};

export const useCreateGame = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const handleCreateGame = async (game: Game): Promise<HookResult> => {
    setLoading(true);
    setError(null);

    try {
      await createGame(game);
      return { data: null, error: null };
    } catch (error) {
      const errorData = extractError(error);
      setError(errorData);
      return { data: null, error: errorData };
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateGame, loading, error };
};
