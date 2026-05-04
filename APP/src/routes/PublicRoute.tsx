import { Navigate } from "react-router-dom";

interface PublicProps {
  isAuth: boolean;
  children: React.ReactNode;
}

function PublicRoute({ isAuth, children }: PublicProps) {
  if (isAuth) {
    return <Navigate to="/home" replace />;
  }
  return children;
}

export default PublicRoute;
