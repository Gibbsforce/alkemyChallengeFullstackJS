// DAOs budget
import BudgetDAOFile from "./budget/BudgetDAOFile.js"
// Singleton
class PersistenceFactorySingleton {
  static instance
  constructor() {
    this.budgetDAO = null
  }
  static getInstance(persistence) {
    if (!!PersistenceFactorySingleton.instance) {
      return PersistenceFactorySingleton.instance
    }
    if (persistence === "file") {
      this.budgetDAO = new BudgetDAOFile()
      PersistenceFactorySingleton.instance = this
      return this
    }
  }
}
export default PersistenceFactorySingleton
