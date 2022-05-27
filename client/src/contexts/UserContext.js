// Hooks
import { useState } from "react"
export const UserContext = React.createContext()
const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined)
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
