import { Link } from "react-router-dom"
import { Wrapper, Content } from "./Header.styles"
// welcome: boolean, btnText: string, btnCallback: function, name: string, email: string
const Header = ({ welcome, btnText, btnCallback, name, email }) => {
    return (
        <Wrapper>
            <Content>
                {welcome && <h1>{welcome}</h1>}
                <ul>

                        {
                            btnText &&
                            <li>
                                <button onClick={btnCallback}>{btnText}</button>
                            </li>
                        }
                        {
                            name &&
                            <li>
                                <strong>{name}</strong>
                            </li>
                        }
                        {
                            email && 
                            <li>
                                <strong>email@email.com</strong>
                            </li>
                        }
                </ul>
            </Content>
        </Wrapper>
    )
}
export default Header