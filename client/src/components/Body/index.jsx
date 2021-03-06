import PropTypes from "prop-types"
import { Wrapper, Content, Grid, Table } from "./Body.styles"
const Body = ({
    children,
    padW,
    home,
    toExpenses,
    toIncomes,
    totalExpense,
    totalIncome,
    expense,
    expensesArray,
    expensesCategory,
    listOption,
    editExpense,
    onEditExpense,
    onEditExpenseHandlerChange,
    finishEditExpense,
    deleteExpense,
    income,
    incomesArray,
    justIncome,
    editIncome,
    onEditIncome,
    onEditIncomeHandlerChange,
    finishEditIncome,
    deleteIncome,
}) => {
    return (
        <Wrapper padW={padW}>
            <Content>
                {
                    home &&
                    <Grid>
                        <section onClick={toExpenses}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                            </svg>
                            <h1>Expenses</h1>
                            <strong>Total: $ {totalExpense}</strong>
                        </section>
                        <section onClick={toIncomes}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                            </svg>
                            <h1>Incomes</h1>
                            <strong>Total: $ {totalIncome}</strong>
                        </section>
                    </Grid>
                }
                {
                    expense &&
                        <Table>
                            {
                                expensesArray.length > 0 ?
                                    expensesArray.filter(({ type }) => type === "expense").map(({ concept, amount, type, category, timestamp }, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                type === "expense" &&
                                                <div className="expenses-container">
                                                    <div className="image">
                                                        {
                                                            expensesCategory.map(({ name, icon }, index) => (name === category) && <div key={index} dangerouslySetInnerHTML={icon}/>)
                                                        }
                                                    </div>
                                                    <div className="info">
                                                        <span><strong>{onEditExpense ? <input type={"text"} name={`concept-${index}`} onChange={onEditExpenseHandlerChange} placeholder={concept}/> : concept}</strong></span>
                                                        <span><strong>{onEditExpense ? <select name={`category-${index}`} onChange={onEditExpenseHandlerChange} defaultValue={category}>{listOption && listOption.map((items, index) => <option value={items} key={index}>{items}</option>)}</select> : category}</strong></span>
                                                        <span><strong>{timestamp.slice(0, 10)}</strong></span>
                                                    </div>
                                                    <div className="amount">
                                                        <strong>$ {onEditExpense ? <input type={"tel"} name={`amount-${index}`} onChange={onEditExpenseHandlerChange}  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} placeholder={Number(amount).toFixed(2)}/> : Number(amount).toFixed(2)}</strong>
                                                        {onEditExpense && <button value={index} onClick={() => finishEditExpense(index)}>Edit</button>}
                                                    </div>
                                                    {
                                                        !onEditExpense &&
                                                        <div className="edit">
                                                            <button value={index} onClick={editExpense}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    }
                                                    <div className="delete">
                                                        <button value={index} onClick={() => deleteExpense(index)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )})
                                : <span>Nothing to show</span>
                            }
                        </Table>
                }
                {
                    income &&
                        <Table>
                              {
                                incomesArray.length > 0 ?
                                    incomesArray.filter(({ type }) => type === "income").map(({ concept, amount, type, category, timestamp }, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                type === "income" &&
                                                <div className="expenses-container">
                                                    <div className="image">
                                                        {
                                                            justIncome.map(({ name, icon }, index) => (name === "Income") && <div key={index} dangerouslySetInnerHTML={icon}/>)
                                                        }
                                                    </div>
                                                    <div className="info">
                                                        <span><strong>{onEditIncome ? <input type={"text"} name={`concept-${index}`} onChange={onEditIncomeHandlerChange} placeholder={concept}/> : concept}</strong></span>
                                                        <span><strong>{timestamp.slice(0, 10)}</strong></span>
                                                    </div>
                                                    <div className="amount">
                                                        <strong>$ {onEditIncome ? <input type={"tel"} name={`amount-${index}`} onChange={onEditIncomeHandlerChange}  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} placeholder={Number(amount).toFixed(2)}/> : Number(amount).toFixed(2)}</strong>
                                                        {onEditIncome && <button value={index} onClick={() => finishEditIncome(index)}>Edit</button>}
                                                    </div>
                                                    {
                                                        !onEditExpense &&
                                                        <div className="edit">
                                                            <button value={index} onClick={editIncome}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    }
                                                    <div className="delete">
                                                        <button value={index} onClick={() => deleteIncome(index)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )})
                                : <span>Nothing to show</span>
                            }
                        </Table>
                }
                {children}
            </Content>
        </Wrapper>
    )
}
Body.propTypes = {
    children: PropTypes.node,
    padW: PropTypes.string,
    home: PropTypes.bool,
    toExpenses: PropTypes.func,
    toIncomes: PropTypes.func,
    totalExpenses: PropTypes.number,
    totalIncomes: PropTypes.number,
    expense: PropTypes.bool,
    expensesArray: PropTypes.array,
    expensesCategory: PropTypes.array,
    listOption: PropTypes.array,
    editExpense: PropTypes.func,
    onEditExpense: PropTypes.bool,
    onEditExpenseHandlerChange: PropTypes.func,
    finishEditExpense: PropTypes.func,
    deleteExpense: PropTypes.func,
    income: PropTypes.bool,
    incomesArray: PropTypes.array,
    justIncome: PropTypes.array,
    editIncome: PropTypes.func,
    onEditIncome: PropTypes.bool,
    onEditIncomeHandlerChange: PropTypes.func,
    finishEditIncome: PropTypes.func,
    deleteIncome: PropTypes.func,
}
export default Body