import express from "express"
// Controllers
import budgetController from "../../controllers/budget/index.js"
// Middlewares
import authenticateToken from "../../middlewares/auth/authenticateToken.js"
import {
  createBudgetValidation,
  updateBudgetValidation,
} from "../../middlewares/budget/budgetValidation.js"
// Defining router
const budgetRouter = express.Router()
// Routers
budgetRouter.get("/", authenticateToken, budgetController.getBudget)
budgetRouter.post(
  "/",
  authenticateToken,
  createBudgetValidation,
  budgetController.createBudget
)
budgetRouter.get("/:id", authenticateToken, budgetController.getBudgetById)
budgetRouter.patch(
  "/:id",
  authenticateToken,
  updateBudgetValidation,
  budgetController.updateBudgetById
)
budgetRouter.delete(
  "/:id",
  authenticateToken,
  budgetController.deleteBudgetById
)
budgetRouter.delete("/", authenticateToken, budgetController.deleteBudget)
export default budgetRouter
