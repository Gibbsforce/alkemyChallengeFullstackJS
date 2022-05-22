// DAOs budget
import BudgetDAOFile from "./budget/BudgetDAOFile.js"
// DAOs users
import UsersDAOFile from "./users/UsersDAOFile.js"
// Singleton
class PersistenceFactorySingleton {
  static instance
  constructor() {
    this.budgetDAO = null
    this.usersDAO = null
  }
  static getInstance(persistence) {
    if (!!PersistenceFactorySingleton.instance) {
      return PersistenceFactorySingleton.instance
    }
    if (persistence === "file") {
      this.budgetDAO = new BudgetDAOFile()
      this.usersDAO = new UsersDAOFile()
      PersistenceFactorySingleton.instance = this
      return this
    }
  }
}
export default PersistenceFactorySingleton
