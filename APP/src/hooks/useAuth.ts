import { useState, useEffect } from "react";
import { validateToken } from "../services/userService";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuth(false);
      setLoading(false);
      return;
    }

    validateToken(token)
      .then(() => {
        setIsAuth(true);
      })
      .catch(() => {
        setIsAuth(false);
        localStorage.removeItem("token");
      })
      .finally(() => setLoading(false));
  }, []);

  return { isAuth, loading };
};

export default useAuth;
