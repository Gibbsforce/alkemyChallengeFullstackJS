// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// Modals
import Continue from "../modals/Continue"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import SortBar from "../components/SortBar"
// Utils
import { category, user } from "../utils/category"
const Expenses = () => {
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
                name={"Alvaro Avalos"}
                email={"tlalvaro15@gmail.com"}
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
            <Body
                expense
                expensesArray={
                    categorySelect ? user[0].budget.filter(({ category }) => category === categorySelect) : user[0].budget
                }
                expensesCategory={category}
                deleteExpense={() => setModal(!modal)}
            />
        </>
    )
}
export default Expenses