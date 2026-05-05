import type { ApiError } from "../types/HookTypes";

export const extractError = (err: unknown): ApiError | null => {
  if (err && typeof err === "object" && "response" in err) {
    const axiosErr = err as { response?: { data?: ApiError } };
    return axiosErr.response?.data ?? null;
  }
  return null;
};