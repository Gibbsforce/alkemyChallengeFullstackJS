// Components
import ModalContainer from "../components/ModalContainer"
// Utils
import icons from "../utils/icons"
const inputElements = [
    {
        name: "name",
        type: "text",
        placeholder: "Name"
    },
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
const SignUp = ({ modal, setModal }) => {
    return (
        <ModalContainer
            stateModal={modal}
            closeButton={() => setModal(false)}
            title={"Sign Up"}
            imageModal={icons.signUp}
            actionButtonText={"Sign Up"}
            inputElements={inputElements}
        >
        </ModalContainer>
    )
}
export default SignUp