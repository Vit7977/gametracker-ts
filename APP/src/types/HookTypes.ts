export interface ApiError {
  message: string;
  error: { message: string; path: string };
}

export interface HookResult<T = void> {
  data: T | null;
  error: ApiError | null;
}