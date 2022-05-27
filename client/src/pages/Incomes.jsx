// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// Modals
import Continue from "../modals/Continue"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
// Utils
import { justIncome, user } from "../utils/category"
const Incomes = () => {
    const navigate = useNavigate()
    const toHome = () => navigate("/home")

    const [modal, setModal] = useState(Boolean)

    return (
        <>
            <Header
                welcome="Expenses"
                btnText={"Back"}
                btnCallback={toHome}
                name={"Alvaro Avalos"}
                email={"tlalvaro15@gmail.com"}
            />
            <Continue
                modal={modal}
                setModal={setModal}
            />
            <Body
                income
                incomesArray={user[0].budget}
                justIncome={justIncome}
                deleteIncome={() => setModal(!modal)}
            />
        </>
    )   
}
export default Incomes