// Hooks
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
// API
import API from "../API"
// Context
import { UserContext } from "../contexts/UserContext"
// Components
import ModalContainer from "../components/ModalContainer"
import Spinner from "../components/Spinner"
// Utils
import icons from "../utils/icons"
import { type, category } from "../utils/category"
const inputElements = [
    {
        name: "concept",
        type: "text",
        placeholder: "Concept"
    },
    {
        name: "amount",
        type: "tel",
        placeholder: "Amount",
        handleKeyPress: (e) => !/[0-9]/.test(e.key) && e.preventDefault(),
    },
]
// modal: boolean, setModal: function
const AddBudget = ({ modal, setModal }) => {

    const navigate = useNavigate()

    const [token] = useContext(UserContext)

    const [concept, setConcept] = useState(String)
    const [amount, setAmount] = useState(Number)
    const [addCategory, setAddCategory] = useState(String)
    const [addType, setAddType] = useState(String)

    const [error, setError] = useState(Boolean)
    const [loading, setLoading] = useState(Boolean)
    const [message, setMessage] = useState(String)

    const closeButton = () => {
        setConcept(null)
        setAmount(null)
        setAddCategory(null)
        setAddType(null)
        setMessage(null)
        setError(false)
        setModal(false)
    }

    const handleInput = (e) => {
        setMessage(null)
        const { name, value } = e.target
        if (name === "concept") {
            setConcept(value)
        }
        if (name === "amount") {
            setAmount(value)
        }
        if (name === "category") {
            setAddCategory(value)
        }
        if (name === "type") {
            setAddType(value)
        }
    }

    const handleSubmit = async (e) => {
        try {
            setError(false)
            setLoading(true)
            const newBudget = {
                concept,
                amount: Number(amount),
                type: addType,
                category: addType === "income" ? "other" : addCategory,
            }
            const { message, description } = await API.fetchCreateBudget(token, newBudget)
            if (message !== "OK") {
                setLoading(false)
                setError(true)
                setMessage(description)
                console.log(description)
                if (description === "Invalid token" || description === "No token provided") {
                    setMessage("Your session has expired. Please log in again.")
                    setTimeout(() => {
                        navigate("/")
                    }, 2000)
                }
                return
            }
            setLoading(false)
            if (addType === "income") return navigate("/incomes")
            if (addType === "expense") return navigate("/expenses")
        } catch (error) {
            setLoading(false)
            setError(true)
            setMessage("Server error")
        }
    }

    return (
        <ModalContainer
            stateModal={modal}
            closeButton={closeButton}
            title={"Add"}
            imageModal={icons.addNew}
            actionButtonText={"Add"}
            inputElements={inputElements}
            budgetType={type}
            budgetTypeName={"Type"}
            budgetCategory={addType === "expense" && category}
            budgetCategoryName={"Category"}
            handleInput={handleInput}
            budgetTypeAction={handleInput}
            budgetCategoryAction={handleInput}
            actionButtonCallback={handleSubmit}
        >
            {loading && <Spinner />}
            {error && <p style={{color: "red", fontSize: "30px"}}>{message}</p>}
        </ModalContainer>
    )
}
export default AddBudget