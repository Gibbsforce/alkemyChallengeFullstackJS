import { useLocation, Navigate, Outlet } from "react-router-dom"
// Hooks
import useAuth from "../../hooks/useAuth"
const RequireAuth = () => {
    const token = useAuth()
    const location = useLocation()
    if (!token) return <Navigate to="/" state={{ from: location }} replace />
    return <Outlet />
}
export default RequireAuth