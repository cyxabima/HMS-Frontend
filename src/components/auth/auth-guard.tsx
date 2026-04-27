import { Navigate, Outlet } from "react-router";
export const AuthGuard = () => {

  // TODO: Custom useAuth hook
  const isLogged = true // Simple check
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />
}

