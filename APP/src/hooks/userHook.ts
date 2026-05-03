import { useState } from "react";
import { createUser } from "../services/userService";
import type { User } from "../types/User";

export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    message: string;
    error: { message: string; path: string };
  } | null>(null);

  const handleCreateUser = async (user: User) => {
    setLoading(true);
    setError(null);

    try {
      await createUser(user);
      return { error: null };
    } catch (err: any) {
      const errorData = err.response?.data || null;
      setError(errorData);
      return { error: errorData };
    } finally {
      setLoading(false);
    }
  };

  return { handleCreateUser, loading, error };
};
