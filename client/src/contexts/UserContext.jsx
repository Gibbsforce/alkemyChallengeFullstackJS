// Hooks
import { createContext, useState } from "react"
export const UserContext = createContext()
const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined)
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
