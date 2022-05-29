import PropTypes from "prop-types"
import { Wrapper, Content } from "./SortBar.styles"
const SortBar = ({ name, category, handleSelectChange, sortTitle }) => {
    return (
        <Wrapper>
            <Content>
                <span>{sortTitle}</span>
                <select name={name} onChange={handleSelectChange}>
                    <option value="">All</option>
                    {
                        category.map((items, index) => <option value={items} key={index}>{items}</option>)
                    }
                </select>
            </Content>
        </Wrapper>
    )
}
SortBar.propTypes = {
    name: PropTypes.string,
    category: PropTypes.array,
    handleSelectChange: PropTypes.func,
    sortTitle: PropTypes.string,
}
export default SortBar