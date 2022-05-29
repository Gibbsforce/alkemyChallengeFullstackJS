// Components
import ModalContainer from "../components/ModalContainer"
// Utils
import icons from "../utils/icons"
// modal: boolean, setModal: function, isConfirm: boolean, handleDelete: function
const Continue = ({ modal, setModal, noActionButtonCallback, actionButtonCallback }) => {
    return (
        <ModalContainer
            stateModal={modal}
            closeButton={() => setModal(!modal)}
            title={"Attention!"}
            parrText={"Are you sure you want to continue?"}
            imageModal={icons.markQuestion}
            noActionButtonText={"No"}
            noActionButtonCallback={noActionButtonCallback}
            actionButtonText={"Yes"}
            actionButtonCallback={actionButtonCallback}
        >
        </ModalContainer>
    )
}
export default Continue