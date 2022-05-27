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
const inputElements = [
    {
        name: "name",
        type: "text",
        placeholder: "Name",
    },
    {
        name: "email",
        type: "email",
        placeholder: "Email",
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password",
    },
]
// modal: boolean, setModal: function
const SignUp = ({ modal, setModal }) => {

    const navigate = useNavigate()

    const [_token, setToken] = useContext(UserContext)

    const [name, setName] = useState(String)
    const [email, setEmail] = useState(String)
    const [password, setPassword] = useState(String)

    const [error, setError] = useState(Boolean)
    const [loading, setLoading] = useState(Boolean)
    const [message, setMessage] = useState(String)

    const closeButton = () => {
        setName(null)
        setEmail(null)
        setPassword(null)
        setMessage(null)
        setError(false)
        setModal(false)
    }

    const handleInput = (e) => {
        setMessage(null)
        const { name, value } = e.target
        if (name === "name") {
            setName(value)
        }
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    }

    const handleSignUp = async () => {
        try {
            setError(false)
            setLoading(true)
            const newUser = {
                name,
                email,
                password,
            }
            const { message, token, description } = await API.fetchSignUp(newUser)
            if (message !== "OK") {
                setLoading(false)
                setError(true)
                setMessage(description)
                return
            }
            setToken(token)
            localStorage.setItem("tokenBudgetApp", JSON.stringify(token))
            setLoading(false)
            navigate("/home")
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
            title={"Sign Up"}
            imageModal={icons.signUp}
            actionButtonText={"Sign Up"}
            inputElements={inputElements}
            actionButtonCallback={handleSignUp}
            handleInput={handleInput}
        >
            {
                loading && <Spinner />
            }
            {
                error && <p style={{color: "red", fontSize: "30px"}}>{message}</p>
            }
        </ModalContainer>
    )
}
export default SignUp