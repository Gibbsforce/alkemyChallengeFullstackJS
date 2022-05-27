// Components
import ModalContainer from "../components/ModalContainer"
// Utils
import icons from "../utils/icons"
// modal: boolean, setModal: function
const Continue = ({ modal, setModal }) => {
    return (
        <ModalContainer
            stateModal={modal}
            closeButton={() => setModal(false)}
            title={"Attention!"}
            parrText={"Are you sure you want to continue?"}
            imageModal={icons.markQuestion}
            actionButtonText={"Continue"}

        >
        </ModalContainer>
    )
}
export default Continue