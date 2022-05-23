import knex from "knex"
import { options } from "../../../config.js"
import SQLContainer from "../../models/SQLContainer.js"
class UsersDAOSQLite extends SQLContainer {
  constructor() {
    super("users")
    this.init()
  }
  init = async () => {
    const db = knex(options.sql)
    try {
      const tableExists = await db.schema.hasTable("users")
      if (tableExists) return
      await db.schema.createTable("users", (table) => {
        table.increments("_id").primary()
        table.string("name")
        table.string("email")
        table.string("password")
        table.timestamp("timestamp").defaultTo(db.fn.now())
      })
      console.log("Users table created")
    } catch (error) {
      console.log(`Error in creating table: ${error}`)
    } finally {
      await db.destroy()
    }
  }
}
export default UsersDAOSQLite
