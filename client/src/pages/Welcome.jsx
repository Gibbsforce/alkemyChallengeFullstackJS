// Hooks
import { useState } from "react"
// Modals
import Login from '../modals/Login'
import SignUp from '../modals/SignUp'
// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Button from "../components/Button"
import Footer from "../components/Footer"
const Welcome = () => {
    const [modalLogin, setModalLogin] = useState(Boolean)
    const [modalSignUp, setModalSigUp] = useState(Boolean)
    return (
        <>
            <Header
                welcome="Welcome to my budget app"
            />
            <Login
                modal={modalLogin}
                setModal={setModalLogin}
            />
            <SignUp
                modal={modalSignUp}
                setModal={setModalSigUp}
            />
            <Body
                padW={"300px 20px"}
            >
                <Button text={"Login"} callback={() => setModalLogin(!modalLogin)}/>
                <Button text={"Sign Up"} callback={() => setModalSigUp(!modalSignUp)}/>
            </Body>
            <Footer />
        </>
    )
}
export default Welcome