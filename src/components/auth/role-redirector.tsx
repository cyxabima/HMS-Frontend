import { Navigate } from "react-router";

export function RoleRedirector() {
  // const user = JSON.parse(localStorage.getItem("user") || "{}");
  const user = { role: "admin" }
  if (user.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  if (user.role === "receptionist") {
    return <Navigate to="/reception" replace />;
  }

  return <Navigate to="/login" replace />;
}
