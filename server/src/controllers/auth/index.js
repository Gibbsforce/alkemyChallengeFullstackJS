import persistence from "../index.js"
import { token } from "../../utils/token.js"
import { createHash, isValidPassword } from "../../utils/hash.js"
const { usersDAO } = persistence
// Controllers
const signUp = async (req, res) => {
  const newUser = {
    name: req.body.name,
    password: createHash(req.body.password),
    email: req.body.email,
  }
  try {
    const userExists = await usersDAO.getById(newUser.email)
    if (userExists)
      return res.status(409).json({ message: "User already exists" })
    const user = await usersDAO.save(newUser)
    res.status(201).json({
      message: "OK",
      user: user,
      token: token(user),
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await usersDAO.getById(email)
    if (!user)
      return res.status(404).json({
        message: "User not found",
      })
    if (!isValidPassword(user, password))
      return res.status(401).json({
        message: "Invalid password",
      })
    res.status(200).json({
      message: "OK",
      token: token(user),
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const getUser = async (req, res) => {
  const { email } = req.user
  try {
    const user = await usersDAO.getById(email)
    res.status(200).json({
      message: "OK",
      user: {
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
export default {
  signUp,
  login,
  getUser,
}
