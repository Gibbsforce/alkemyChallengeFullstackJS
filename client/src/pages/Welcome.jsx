// Components
import Header from "../components/Header"
import Body from "../components/Body"
import Button from "../components/Button"
const Welcome = () => {
    return (
        <>
            <Header
                welcome="Welcome to my budget app"
            />
            <Body
                padW={"300px 20px"}
            >
                <Button text={"Login"}/>
                <Button text={"Sign Up"}/>
            </Body>
        </>
    )
}
export default Welcome