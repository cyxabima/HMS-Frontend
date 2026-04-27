import { Outlet } from "react-router"

export const AdminLayout = () => {
  // TODO: first check is the user is allowed to access this or not 
  return (
    <div>
      Admin Layout Here
      <Outlet />
    </div>
  )
}
