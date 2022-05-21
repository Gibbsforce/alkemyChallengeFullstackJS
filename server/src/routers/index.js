import express from "express"
// Routes
import authRouter from "./auth/index.js"
import budgetRouter from "./budget/index.js"
// Global router
const router = express.Router()
router.use("/auth", authRouter)
router.use("/budget", budgetRouter)
export default router
