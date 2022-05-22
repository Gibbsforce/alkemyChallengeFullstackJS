import bCrypt from "bcrypt"
export const createHash = (password) =>
  bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
export const isValidPassword = (user, password) =>
  bCrypt.compareSync(password, user.password)
