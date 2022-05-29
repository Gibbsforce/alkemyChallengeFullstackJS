// Hooks
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useGetBudgetsFetch } from "../hooks/useGetBudgetsFetch"
// Context
import { UserContext } from "../contexts/UserContext"
// API
import API from "../API"
// Modals
import Continue from "../modals/Continue"
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Spinner from "../components/Spinner"
import AlertText from "../components/AlertText"
// Utils
import { justIncome } from "../utils/category"
import { decodeJWT } from "../utils/helpers"
import Button from "../components/Button"
const Incomes = () => {

    const { error, budgets, isLoading } = useGetBudgetsFetch()

    const [token, setToken] = useContext(UserContext)

    const [updateBudget, setUpdateBudget] = useState(Array)
    const [editLoading, setEditLoading] = useState(Boolean)
    const [editError, setEditError] = useState(Boolean)
    const [editMessage, setEditMessage] = useState(String)

    const [showEdit, setShowEdit] = useState(Boolean)

    const [deleteId, setDeleteId] = useState(Number)
    const [deleteLoading, setDeleteLoading] = useState(Boolean)
    const [deleteError, setDeleteError] = useState(Boolean)
    const [deleteMessage, setDeleteMessage] = useState(String)

    const navigate = useNavigate()
    
    const [modal, setModal] = useState(Boolean)

    useEffect(() => {
        if (!error) {
            const income = budgets.filter(({ type }) => type === "income").map((items) => items)
            setUpdateBudget(income)
        }
    }, [budgets, error])


    const toHome = () => {
        const { exp } = decodeJWT(token)
        if (exp * 1000 < Date.now()) return setToken(null)
        navigate("/home")
    }

    const onEditHandlerChange = (e) => {
        setEditMessage(null)
        const { name, value } = e.target
        if (!value.length > 0) return
        updateBudget.map((items, index) => {
            if (name === `concept-${index}`) {
                items.concept = value
                setUpdateBudget([...updateBudget])
            }
            if (name === `amount-${index}`) {
                items.amount = Number(value)
                setUpdateBudget([...updateBudget])
            }
            return setUpdateBudget([...updateBudget])
        })
    }

    const handleEdit = async (id) => {
        try {
            setEditLoading(true)
            setEditError(false)
            const { exp } = decodeJWT(token)
            if (exp * 1000 < Date.now()) return setToken(null)
            const patchId = updateBudget[id]._id
            updateBudget[id].category = "other"
            if (id == null) return
            const { message, description } = await API.fetchPatchBudget(token, patchId, updateBudget[id])
            if (message !== "OK") {
                setEditLoading(false)
                setEditError(true)
                setEditMessage(description)
                return
            }
            setUpdateBudget([...updateBudget])
            setEditMessage("Updated succesfully")
            setEditLoading(false)
            setShowEdit(false)
        } catch (error) {
            setEditError(true)
            setEditLoading(false)
            setEditMessage("Server error")
        }
    }

    const editIncome = () => {
        setEditMessage(null)
        const { exp } = decodeJWT(token)
        if (exp * 1000 < Date.now()) return setToken(null)
        setShowEdit(!showEdit)
        setUpdateBudget([...updateBudget])
    }

    const closeButton = (id) => {
        setModal(!modal)
        setDeleteId(id)
    }

    const handleDelete = async () => {
        try {
            setDeleteLoading(true)
            setDeleteError(false)
            const { exp } = decodeJWT(token)
            if (exp * 1000 < Date.now()) return setToken(null)
            const { message, description } = await API.fetchDeleteBudget(token, updateBudget[deleteId]._id)
            if (message !== "OK") {
                setDeleteLoading(false)
                setDeleteError(true)
                setDeleteMessage(description)
                setModal(!modal)
                return
            }
            updateBudget.splice(deleteId, 1)
            setDeleteMessage("Deleted succesfully")
            setDeleteLoading(true)
            setModal(!modal)
            setTimeout(() => {
                navigate("/home")
            }, 500)
        } catch (error) {
            setDeleteLoading(false)
            setDeleteError(false)
            setDeleteMessage("Server error")
            setModal(!modal)
        }
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
                noActionButtonCallback={closeButton}
                actionButtonCallback={handleDelete}
            />
            {
                showEdit &&
                    <Button
                        text={"Cancel"}
                        callback={editIncome}
                    />
                    
            }
            {editLoading && <Spinner />}
            {isLoading && <Spinner />}
            {deleteLoading && <Spinner />}
            {error && <span>{"Something went wrong...!"}</span>}
            {!editError && editMessage != null && <AlertText text={editMessage} />}
            {!deleteError && deleteMessage != null && <AlertText text={deleteMessage} />}
            {error && <span>{"Something went wrong...!"}</span>}
            <Body
                income
                incomesArray={updateBudget}
                justIncome={justIncome}
                onEditIncomeHandlerChange={onEditHandlerChange}
                editIncome={editIncome}
                onEditIncome={showEdit}
                finishEditIncome={handleEdit}
                deleteIncome={closeButton}
            />
        </>
    )   
}
export default Incomes