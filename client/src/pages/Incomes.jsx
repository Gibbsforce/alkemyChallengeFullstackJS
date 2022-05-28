// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetBudgetsFetch } from "../hooks/useGetBudgetsFetch"
// Modals
import Continue from "../modals/Continue"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Spinner from "../components/Spinner"
// Utils
import { justIncome } from "../utils/category"
const Incomes = () => {

    const { error, budgets, isLoading } = useGetBudgetsFetch()

    const navigate = useNavigate()
    const toHome = () => navigate("/home")

    const [modal, setModal] = useState(Boolean)

    return (
        <>
            <Header
                welcome="Expenses"
                btnText={"Back"}
                btnCallback={toHome}
            />
            <Continue
                modal={modal}
                setModal={setModal}
            />
            {isLoading && <Spinner />}
            {error && <span>{"Something went wrong...!"}</span>}
            <Body
                income
                incomesArray={budgets}
                justIncome={justIncome}
                deleteIncome={() => setModal(!modal)}
            />
        </>
    )   
}
export default Incomes