// Hooks
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useGetBudgetsFetch } from "../hooks/useGetBudgetsFetch"
// Context
import { UserContext } from "../contexts/UserContext"
// Modals
import AddBudget from "../modals/AddBudget"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Button from "../components/Button"
// Helpers
import { decodeJWT } from "../utils/helpers"
const Home = () => {

    const { totalExpense, totalIncome } = useGetBudgetsFetch()

    const [token, setToken] = useContext(UserContext)

    const navigate = useNavigate()
    
    const toExpenses = () => {
        const { exp } = decodeJWT(token)
        if (exp * 1000 < Date.now()) return setToken(null)
        navigate("/expenses")
    }

    const toIncomes = () => {
        const { exp } = decodeJWT(token)
        if (exp * 1000 < Date.now()) return setToken(null)
        navigate("/incomes")
    }

    const [modalAdd, setModalAdd] = useState(Boolean)

    const logOut = () => {
        setToken(null)
    }

    return (
        <>
            <Header
                welcome="Home"
                btnText="Log Out"
                btnCallback={logOut}
            />
            <AddBudget
                modal={modalAdd}
                setModal={setModalAdd}
            />
            <Body
                home
                toExpenses={toExpenses}
                toIncomes={toIncomes}
                totalExpense={totalExpense.toFixed(2)}
                totalIncome={totalIncome.toFixed(2)}
            />
            <Button
                text="Add"
                callback={() => setModalAdd(!modalAdd)}
            />
        </>
    )
}
export default Home