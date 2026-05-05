import { useState } from "react";
import { createUser, login } from "../services/userService";
import type { User } from "../types/User";
import type { ApiError, HookResult } from "../types/HookTypes";
import { extractError } from "../utils/extractError";


export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const handleCreateUser = async (user: User): Promise<HookResult> => {
    setLoading(true);
    setError(null);

    try {
      await createUser(user);
      return { data: null, error: null };
    } catch (error: any) {
      const errorData = extractError(error);
      setError(errorData);
      return { data: null, error: errorData };
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateUser, loading, error };
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const handleLogin = async (
    email: string,
    senha: string,
  ): Promise<HookResult<string>> => {
    setLoading(true);
    setError(null);

    try {
      const token = await login(email, senha);
      return { data: token, error: null };
    } catch (error) {
      const errorData = extractError(error);
      setError(errorData);
      return { data: null, error: errorData };
    } finally {
      setLoading(false);
    }
  };
  return { handleLogin, loading, error };
};
