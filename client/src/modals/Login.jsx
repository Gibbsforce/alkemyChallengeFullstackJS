// Components
import ModalContainer from "../components/ModalContainer"
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
    return (
        <ModalContainer
            stateModal={modal}
            closeButton={() => setModal(false)}
            title={"Login"}
            imageModal={icons.login}
            actionButtonText={"Login"}
            inputElements={inputElements}
        >
        </ModalContainer>
    )
}
export default Login