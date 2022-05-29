import PropTypes from "prop-types"
import { Wrapper, Content } from "./AlertText"
const AlertText = ({ text }) => {
    return (
        <Wrapper>
            <Content>
                <strong>
                    {text}
                </strong>
            </Content>
        </Wrapper>
    )
}
AlertText.propTypes = {
    text: PropTypes.string,
}
export default AlertText