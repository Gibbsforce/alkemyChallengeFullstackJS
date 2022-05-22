import FileContainer from "../../models/FileContainer.js"
class BudgetDAOFile extends FileContainer {
  constructor() {
    super("/budget.json")
  }
}
export default BudgetDAOFile
