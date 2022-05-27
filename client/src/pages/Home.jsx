// Hooks
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
// Context
import { UserContext } from "../contexts/UserContext"
// Modals
import AddBudget from "../modals/AddBudget"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Button from "../components/Button"
const Home = () => {

    const [_, setToken] = useContext(UserContext)

    const navigate = useNavigate()
    const toExpenses = () => navigate("/expenses")
    const toIncomes = () => navigate("/incomes")
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
                totalExpense={"0.00"}
                totalIncome={"0.00"}
            />
            <Button
                text="Add"
                callback={() => setModalAdd(!modalAdd)}
            />
        </>
    )
}
export default Home