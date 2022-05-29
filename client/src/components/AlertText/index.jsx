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
export default AlertText