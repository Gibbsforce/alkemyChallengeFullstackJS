// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetBudgetsFetch } from "../hooks/useGetBudgetsFetch"
// Modals
import Continue from "../modals/Continue"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import SortBar from "../components/SortBar"
import Spinner from "../components/Spinner"
// Utils
import { category } from "../utils/category"
const Expenses = () => {

    const { error, budgets, isLoading } = useGetBudgetsFetch()

    const navigate = useNavigate()
    const toHome = () => navigate("/home")

    const [modal, setModal] = useState(Boolean)
    const [categorySelect, setCategorySelect] = useState(String)

    const handleSelectChange = (e) => {
        setCategorySelect(e.target.value)
    }

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
            <SortBar
                sortTitle={`Sort by:`}
                category={category.map(({ name }) => name)}
                handleSelectChange={handleSelectChange}
            />
            {isLoading && <Spinner />}
            {error && <span>{"Something went wrong...!"}</span>}
            <Body
                expense
                expensesArray={
                    categorySelect ? budgets.filter(({ category }) => category === categorySelect) : budgets
                }
                expensesCategory={category}
                deleteExpense={() => setModal(!modal)}
            />
        </>
    )
}
export default Expenses