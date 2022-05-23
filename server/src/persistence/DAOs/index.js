// DAOs budget
import BudgetDAOFile from "./budget/BudgetDAOFile.js"
import BudgetDAOSQLite from "./budget/BudgetDAOSQLite.js"
// DAOs users
import UsersDAOFile from "./users/UsersDAOFile.js"
import UsersDAOSQLite from "./users/UsersDAOSQLite.js"
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
    if (persistence === "sql") {
      this.budgetDAO = new BudgetDAOSQLite()
      this.usersDAO = new UsersDAOSQLite()
      PersistenceFactorySingleton.instance = this
      return this
    }
  }
}
export default PersistenceFactorySingleton
