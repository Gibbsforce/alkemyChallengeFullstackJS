import express from "express"
// Controllers
import authController from "../../controllers/auth/index.js"
// Defining router
const authRouter = express.Router()
// Routers
authRouter.get("/", authController.auth)
export default authRouter
