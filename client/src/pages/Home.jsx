// Hooks
import { useNavigate } from "react-router-dom"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Button from "../components/Button"
const Home = () => {
    const navigate = useNavigate()
    const toExpenses = () => navigate("/expenses")
    const toIncomes = () => navigate("/incomes")
    return (
        <>
            <Header
                welcome="Home"
                btnText="Log Out"
                name={"Alvaro Avalos"}
                email={"tlalvaro15@gmail.com"}
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
            />
        </>
    )
}
export default Home