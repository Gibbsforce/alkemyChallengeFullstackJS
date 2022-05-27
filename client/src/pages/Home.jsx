// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// Modals
import AddBudget from "../modals/AddBudget"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Button from "../components/Button"
const Home = () => {
    const navigate = useNavigate()
    const toExpenses = () => navigate("/expenses")
    const toIncomes = () => navigate("/incomes")
    const [modalAdd, setModalAdd] = useState(Boolean)
    return (
        <>
            <Header
                welcome="Home"
                btnText="Log Out"
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