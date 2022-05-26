// Hooks
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import SortBar from "../components/SortBar"
// Utils
import { category, user } from "../utils/category"
const Expenses = () => {
    const navigate = useNavigate()
    const toHome = () => navigate("/home")

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
            <SortBar
                category={category.map(({ name }) => name)}
                handleSelectChange={handleSelectChange}
            />
            <Body
                expense
                expensesArray={
                    categorySelect ? user[0].budget.filter(({ category }) => category === categorySelect) : user[0].budget
                }
                expensesCategory={category}
            />
        </>
    )
}
export default Expenses