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
        name: "email",
        type: "email",
        placeholder: "Email"
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password"
    },
]
// modal: boolean, setModal: function
const Login = ({ modal, setModal }) => {

    const navigate = useNavigate()

    const [_token, setToken] = useContext(UserContext)

    const [email, setEmail] = useState(String)
    const [password, setPassword] = useState(String)

    const [error, setError] = useState(Boolean)
    const [loading, setLoading] = useState(Boolean)
    const [message, setMessage] = useState(String)

    const closeButton = () => {
        setEmail(null)
        setPassword(null)
        setMessage(null)
        setError(false)
        setModal(false)
    }

    const handleInput = (e) => {
        setMessage(null)
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    }

    const handleLogin = async () => {
        try {
            setError(false)
            setLoading(true)
            const { message, token, description } = await API.fetchLogin({ email, password })
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
            title={"Login"}
            imageModal={icons.login}
            actionButtonText={"Login"}
            inputElements={inputElements}
            actionButtonCallback={handleLogin}
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
export default Login