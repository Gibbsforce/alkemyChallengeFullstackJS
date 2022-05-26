import { Wrapper } from "./Button.styles"
// text: string, callback: function
const Button = ({ text, callback }) => {
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    )
}
export default Button