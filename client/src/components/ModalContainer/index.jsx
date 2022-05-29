import PropTypes from "prop-types"
// Hooks
import { useEffect, useRef } from "react"
// Components
import Button from "../Button"
import SortBar from "../SortBar"
import { Wrapper, Content, CloseButton } from "./ModalContainer.styles"
const ModalContainer = ({
    children,
    stateModal,
    title,
    imageModal,
    closeButton,
    actionButtonCallback,
    actionButtonText,
    noActionButtonCallback,
    noActionButtonText,
    inputElements,
    handleInput,
    parrText,
    budgetType,
    budgetTypeAction,
    budgetTypeName,
    budgetCategory,
    budgetCategoryAction,
    budgetCategoryName,
}) => {

    const closeOutside = useRef()
    
    useEffect(() => {
        const handler = (e) => {
            if (stateModal && !closeOutside.current.contains(e.target)) {
                closeButton()
            }
        }
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <>
            {stateModal &&
                <Wrapper>
                    <Content ref={closeOutside}>
                        <h1>{title}</h1>
                        <div className="image-modal" dangerouslySetInnerHTML={imageModal} />
                        {
                            inputElements && inputElements.map(({ name, type, placeholder, handleKeyPress }, index) => <input key={index} name={name} type={type} onChange={handleInput} onKeyPress={handleKeyPress} placeholder={placeholder}/>)
                        }
                        {
                            parrText && <p>{parrText}</p>
                        }
                        {
                            budgetType && <SortBar name={budgetTypeName.toLocaleLowerCase()} sortTitle={budgetTypeName} category={budgetType.map(({ type }) => type)} handleSelectChange={budgetTypeAction} />
                        }
                        {
                            budgetCategory && <SortBar name={budgetCategoryName.toLocaleLowerCase()} sortTitle={budgetCategoryName} category={budgetCategory.map(({ name }) => name)} handleSelectChange={budgetCategoryAction} />
                        }
                        {
                            noActionButtonText && <Button text={noActionButtonText} callback={noActionButtonCallback} />
                        }
                        {
                            actionButtonText && <Button text={actionButtonText} callback={actionButtonCallback} />
                        }
                        <CloseButton onClick={closeButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </CloseButton>
                        {children}
                    </Content>
                </Wrapper>
            }
        </>
    )
}
ModalContainer.propTypes = {
    children: PropTypes.node,
    stateModal: PropTypes.bool,
    title: PropTypes.string,
    closeButton: PropTypes.func,
    actionButtonCallback: PropTypes.func,
    actionButtonText: PropTypes.string,
    noActionButtonCallback: PropTypes.func,
    noActionButtonText: PropTypes.string,
    inputElements: PropTypes.array,
    handleInput: PropTypes.func,
    parrText: PropTypes.string,
    budgetType: PropTypes.array,
    budgetTypeAction: PropTypes.func,
    budgetTypeName: PropTypes.string,
    budgetCategoryAction: PropTypes.func,
    budgetCategoryName: PropTypes.string,
}
export default ModalContainer