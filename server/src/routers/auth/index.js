import express from "express"
// Controllers
import authController from "../../controllers/auth/index.js"
// Middlewares
import authenticateToken from "../../middlewares/auth/authenticateToken.js"
import {
  validateSignUp,
  validateLogin,
} from "../../middlewares/auth/userValidation.js"
// Defining router
const authRouter = express.Router()
// Routers
authRouter.post("/signup", validateSignUp, authController.signUp)
authRouter.post("/login", validateLogin, authController.login)
authRouter.get("/user", authenticateToken, authController.getUser)
authRouter.delete("/user", authenticateToken, authController.deleteUser)
export default authRouter
