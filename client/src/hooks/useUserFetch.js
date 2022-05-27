/*
Not using this hook anymore till fix the issue with the user fetching
*/

import { useState, useEffect } from "react"
// API
import API from "../API"
// Helpers
import { isPersistedLocal } from "../utils/helpers"
export const useUserFetch = () => {
  const [token, setToken] = useState(String)
  const [_user, setUser] = useState(Object)
  const [error, setError] = useState(Boolean)
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean)

  useEffect(() => {
    const persistedState = isPersistedLocal("tokenBudgetApp")
    if (persistedState) {
      setToken(persistedState)
      return
    }
    setToken(undefined)
    setIsLoggedIn(false)
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError(false)
        if (!token) return
        const { message, user } = await API.fetchUser(token)
        if (message !== "OK") {
          setError(true)
          setIsLoggedIn(false)
          localStorage.removeItem("tokenBudgetApp")
          return
        }
        setUser(user)
        console.log(isLoggedIn)
        setIsLoggedIn(true)
      } catch (error) {
        setError(true)
        setIsLoggedIn(false)
      }
    }
    fetchUser()
  }, [token, isLoggedIn])
  return { error, isLoggedIn, _user }
}
