import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
const useAuth = () => {
  const [token] = useContext(UserContext)
  return token
}
export default useAuth
