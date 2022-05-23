import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/dataValidations.js"
export const validateSignUp = (req, res, next) => {
  const { name, email, password } = req.body
  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Missing fields" })
  if (!validateEmail(email))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid email" })
  if (!validatePassword(password))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid password" })
  if (!validateName(name))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid name" })
  next()
}
export const validateLogin = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Missing fields" })
  if (!validateEmail(email))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid email" })
  if (!validatePassword(password))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid password" })
  next()
}
