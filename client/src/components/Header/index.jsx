import PropTypes from "prop-types"
// Hooks
import { useState, useEffect, useContext } from "react"
// Context
import { UserContext } from "../../contexts/UserContext"
// Helpers
import { decodeJWT } from '../../utils/helpers'
import { Wrapper, Content } from "./Header.styles"
const Header = ({ welcome, btnText, btnCallback }) => {

    const [token] = useContext(UserContext)

    const [name, setName] = useState(String)
    const [email, setEmail] = useState(String)

    useEffect(() => {
        if (token) {
            const { email, name } = decodeJWT(token)
            setName(name)
            setEmail(email)
        }
    }, [token])

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
                            <li>
                                <strong>{name || "-"}</strong>
                            </li>
                        }
                        {
                            <li>
                                <strong>{email || "-"}</strong>
                            </li>
                        }
                </ul>
            </Content>
        </Wrapper>
    )
}
Header.propTypes = {
    welcome: PropTypes.string,
    btnText: PropTypes.string,
    btnCallback: PropTypes.func,
}
export default Header