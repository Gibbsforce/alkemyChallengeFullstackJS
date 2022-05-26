// Hooks
import { useNavigate } from "react-router-dom"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
// Utils
import { justIncome, user } from "../utils/category"
const Incomes = () => {
    const navigate = useNavigate()
    const toHome = () => navigate("/home")
    return (
        <>
            <Header
                welcome="Expenses"
                btnText={"Back"}
                btnCallback={toHome}
                name={"Alvaro Avalos"}
                email={"tlalvaro15@gmail.com"}
            />
            <Body
                income
                incomesArray={user[0].budget}
                justIncome={justIncome}
            />
        </>
    )   
}
export default Incomes