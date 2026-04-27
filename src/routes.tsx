import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/login-page";
import { AdminLayout } from "./layouts/admin-layout";
import AdminDashboard from "./pages/admin-dashboard";
import { NotFound } from "./pages/not-found";
import { ReceptionLayout } from "./layouts/reception-layout";
import ReceptionDashboard from "./pages/reception-dashboard";
import { AuthGuard } from "./components/auth/auth-guard";
import { RoleRedirector } from "./components/auth/role-redirector";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <AuthGuard />, // for all children
    children: [
      {
        index: true, element: <RoleRedirector />
      },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
        ]
      },
      {
        path: "reception",
        element: <ReceptionLayout />,
        children: [
          { index: true, element: <ReceptionDashboard /> },
        ]
      }
    ]
  },

  { path: "*", element: <NotFound /> },
]);
