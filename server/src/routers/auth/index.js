import express from "express"
// Controllers
import authController from "../../controllers/auth/index.js"
// Middlewares
import authenticateToken from "../../middlewares/auth/authenticateToken.js"
// Defining router
const authRouter = express.Router()
// Routers
authRouter.post("/signup", authController.signUp)
authRouter.post("/login", authController.login)
authRouter.get("/user", authenticateToken, authController.getUser)
export default authRouter
