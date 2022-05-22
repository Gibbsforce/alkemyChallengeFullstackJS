import fs from "fs"
import { options } from "../../config.js"
class FileContainer {
  constructor(fileName) {
    this.fileName = `${options.file.path}/${fileName}`
  }
  save = async (data) => {
    const path = `./${this.fileName}`
    try {
      const readFile = await fs.promises.readFile(path, "utf8")
      let newData = []
      if (readFile === "" || readFile === "[]") {
        data._id = 1
        data.timestamp = new Date().toISOString()
        newData = [data]
      } else {
        const readFileParse = JSON.parse(readFile)
        data._id = readFileParse[readFileParse.length - 1]._id + 1
        data.timestamp = new Date().toISOString()
        newData = [...readFileParse, data]
      }
      await fs.promises.writeFile(path, JSON.stringify(newData, null, 2))
      return data._id
    } catch (error) {
      console.log(`Error in saving data: ${error}`)
    }
  }
  getAll = async () => {
    const path = `./${this.fileName}`
    try {
      const readFile = await fs.promises.readFile(path, "utf8")
      if (readFile === "" || readFile === "[]") return null
      return JSON.parse(readFile)
    } catch (error) {
      console.log(`Error in getting data: ${error}`)
    }
  }
  getById = async (id) => {
    const path = `./${this.fileName}`
    try {
      const readFile = JSON.parse(await fs.promises.readFile(path, "utf8"))
      const dataId = readFile.find(({ _id, email }) =>
        email ? email.toString() === id : _id.toString() === id
      )
      if (!dataId) return null
      return dataId
    } catch (error) {
      console.log(`Error in getting data by id: ${error}`)
    }
  }
  updateById = async (id, data) => {
    const path = `./${this.fileName}`
    try {
      const readFile = JSON.parse(await fs.promises.readFile(path, "utf8"))
      const indexId = readFile.findIndex(({ _id }) => _id.toString() === id)
      if (indexId === -1) return null
      readFile.splice(indexId, 1, data)
      data._id = Number(id)
      data.timestamp = new Date().toISOString()
      await fs.promises.writeFile(path, JSON.stringify(readFile, null, 2))
      return readFile[indexId]
    } catch (error) {
      console.log(`Error in updating data by id: ${error}`)
    }
  }
  deleteById = async (id) => {
    const path = `./${this.fileName}`
    try {
      const readFile = JSON.parse(await fs.promises.readFile(path, "utf8"))
      const indexId = readFile.findIndex(({ _id }) => _id.toString() === id)
      if (indexId === -1) return null
      readFile.splice(indexId, 1)
      await fs.promises.writeFile(path, JSON.stringify(readFile, null, 2))
      return true
    } catch (error) {
      console.log(`Error in deleting data by id: ${error}`)
    }
  }
  deleteAll = async () => {
    const path = `./${this.fileName}`
    try {
      const readFile = await fs.promises.readFile(path, "utf-8")
      if (readFile === "") return null
      await fs.promises.writeFile(path, "", "utf-8")
      console.log("All data deleted")
      return true
    } catch (error) {
      console.log(`Error in deleting all data: ${error}`)
    }
  }
}
export default FileContainer
