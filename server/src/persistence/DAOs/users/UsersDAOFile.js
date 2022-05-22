import FileContainer from "../../models/FileContainer.js"
class UsersDAOFile extends FileContainer {
  constructor() {
    super("/users.json")
  }
}
export default UsersDAOFile
