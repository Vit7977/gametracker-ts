import { Navigate } from "react-router-dom";

interface ProtectedProps {
  isAuth: boolean;
  children: React.ReactNode;
}

function ProtectedRoute({ isAuth, children }: ProtectedProps) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
