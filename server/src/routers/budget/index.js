import express from "express"
// Controllers
import budgetController from "../../controllers/budget/index.js"
// Defining router
const budgetRouter = express.Router()
// Routers
budgetRouter.get("/", budgetController.budget)
export default budgetRouter
