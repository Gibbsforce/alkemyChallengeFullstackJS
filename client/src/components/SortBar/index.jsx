import { Wrapper, Content } from "./SortBar.styles"
// category: array, handleSelectChange: function
const SortBar = ({ category, handleSelectChange }) => {
    return (
        <Wrapper>
            <Content>
                <span>Sort By:</span>
                <select onChange={handleSelectChange}>
                    <option value="">All</option>
                    {
                        category.map((items, index) => <option value={items} key={index}>{items}</option>)
                    }
                </select>
            </Content>
        </Wrapper>
    )
}
export default SortBar