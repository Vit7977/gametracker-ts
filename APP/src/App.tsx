import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import Cadastrar from "./pages/Cadastrar";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";

function App() {
  const { isAuth, loading } = useAuth();

  if (loading)
    return (
      <div className="h-screen bg-zinc-800 flex justify-center items-center text-6xl font-bold text-white">
        Carregando...
      </div>
    );

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <NotFound />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastrar"
          element={
            <PublicRoute isAuth={isAuth}>
              <Cadastrar />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute isAuth={isAuth}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jogos"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Jogos />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
