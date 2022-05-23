import knex from "knex"
import { options } from "../../config.js"
class SQLContainer {
  constructor(tableName) {
    this.tableName = tableName
    this.db = knex(options.sql)
  }
  save = async (data) => {
    try {
      const result = await this.db(this.tableName).insert(data)
      return result[0]
    } catch (error) {
      console.log(`Error in saving data: ${error}`)
    }
  }
  getAll = async () => {
    try {
      const result = await this.db(this.tableName).select()
      if (result.length === 0) return null
      const resultParsed = result.map(
        ({ _id, concept, amount, user, type, category }) => {
          return {
            _id,
            concept,
            amount,
            user: JSON.parse(user),
            type,
            category,
          }
        }
      )
      return resultParsed
    } catch (error) {
      console.log(`Error in getting data: ${error}`)
    }
  }
  getById = async (_id) => {
    try {
      try {
        const resultEmail = await this.db(this.tableName).where({ email: _id })
        if (resultEmail.length === 0) return null
        return resultEmail[0]
      } catch (error) {
        if (error) {
          const resultId = await this.db(this.tableName).where({ _id })
          if (resultId.length === 0) return null
          const resultParsed = resultId.map(
            ({ _id, concept, amount, user, type, category }) => {
              return {
                _id,
                concept,
                amount,
                user: JSON.parse(user),
                type,
                category,
              }
            }
          )
          return resultParsed[0]
        }
      }
    } catch (error) {
      console.log(`Error in getting data by id: ${error}`)
    }
  }
  updateById = async (_id, data) => {
    const dataParsed = {
      _id: data._id,
      concept: data.concept,
      amount: data.amount,
      user: JSON.stringify(data.user),
      type: data.type,
      category: data.category,
    }
    try {
      const result = await this.db(this.tableName)
        .where({ _id })
        .update(dataParsed)
      if (result !== 1) return null
      const updated = await this.getById(_id)
      return updated
    } catch (error) {
      console.log(`Error in updating data: ${error}`)
    }
  }
  deleteById = async (_id) => {
    try {
      const result = await this.db(this.tableName).where({ _id }).del()
      if (result !== 1) return null
      return true
    } catch (error) {
      console.log(`Error in deleting data: ${error}`)
    }
  }
  deleteAll = async () => {
    try {
      const result = await this.db(this.tableName).del()
      if (result !== 1) return null
      return result
    } catch (error) {
      console.log(`Error in deleting data: ${error}`)
    }
  }
}
export default SQLContainer
