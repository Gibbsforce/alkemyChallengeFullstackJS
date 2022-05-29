// Hooks
import { useState, useEffect, useContext } from "react"
// Context
import { UserContext } from "../contexts/UserContext"
// API
import API from "../API"
export const useGetBudgetsFetch = () => {
  const [budgets, setBudgets] = useState(Array)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [error, setError] = useState(Boolean)
  const [isLoading, setIsLoading] = useState(Boolean)
  const [token] = useContext(UserContext)
  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        setError(false)
        setIsLoading(true)
        if (budgets.length === 0) return
        const { message, budget } = await API.fetchGetBudgets(token)
        if (message !== "OK") {
          setIsLoading(false)
          setError(true)
          return
        }
        const totalIncome = budget
          .filter(({ type }) => type === "income")
          .reduce((acc, curr) => acc + curr.amount, 0)
        const totalExpense = budget
          .filter(({ type }) => type === "expense")
          .reduce((acc, curr) => acc + curr.amount, 0)
        setTotalIncome(totalIncome)
        setTotalExpense(totalExpense)
        setIsLoading(false)
        setBudgets(budget)
      } catch (error) {
        setIsLoading(false)
        setError(true)
      }
    }
    fetchBudgets()
  }, [token, budgets])
  return { error, budgets, isLoading, totalIncome, totalExpense }
}
