import PropTypes from "prop-types"
// Components
import ModalContainer from "../components/ModalContainer"
// Utils
import icons from "../utils/icons"
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
Continue.propTypes = {
    modal: PropTypes.bool,
    setModal: PropTypes.func,
    noActionButtonCallback: PropTypes.func,
    actionButtonCallback: PropTypes.func,
}
export default Continue