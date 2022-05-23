import knex from "knex"
import { options } from "../../../config.js"
import SQLContainer from "../../models/SQLContainer.js"
class BudgetDAOSQLite extends SQLContainer {
  constructor() {
    super("budget")
    this.init()
  }
  init = async () => {
    const db = knex(options.sql)
    try {
      const tableExists = await db.schema.hasTable("budget")
      if (tableExists) return
      await db.schema.createTable("budget", (table) => {
        table.increments("_id").primary()
        table.string("concept")
        table.float("amount")
        table.string("user")
        table.string("type")
        table.string("category")
        table.timestamp("timestamp").defaultTo(db.fn.now())
      })
      console.log("Budget table created")
    } catch (error) {
      console.log(`Error in creating table: ${error}`)
    } finally {
      await db.destroy()
    }
  }
}
export default BudgetDAOSQLite
