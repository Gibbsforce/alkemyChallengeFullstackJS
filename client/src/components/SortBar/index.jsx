import { Wrapper, Content } from "./SortBar.styles"
// category: array, handleSelectChange: function, sortBy: string
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
export default SortBar