// Components
import ModalContainer from "../components/ModalContainer"
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
        type: "number",
        placeholder: "Amount"
    },
]
// modal: boolean, setModal: function
const AddBudget = ({ modal, setModal }) => {
    return (
        <ModalContainer
            stateModal={modal}
            closeButton={() => setModal(false)}
            title={"Add"}
            imageModal={icons.addNew}
            actionButtonText={"Add"}
            inputElements={inputElements}
            budgetType={type}
            budgetTypeName={"Type"}
            budgetCategory={category}
            budgetCategoryName={"Category"}
        >
        </ModalContainer>
    )
}
export default AddBudget