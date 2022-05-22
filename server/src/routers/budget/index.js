import express from "express"
// Controllers
import budgetController from "../../controllers/budget/index.js"
// Defining router
const budgetRouter = express.Router()
// Routers
budgetRouter.get("/", budgetController.getBudget)
budgetRouter.post("/", budgetController.createBudget)
budgetRouter.get("/:id", budgetController.getBudgetById)
budgetRouter.patch("/:id", budgetController.updateBudgetById)
budgetRouter.delete("/:id", budgetController.deleteBudgetById)
budgetRouter.delete("/", budgetController.deleteBudget)
export default budgetRouter
