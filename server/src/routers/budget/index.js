import express from "express"
// Controllers
import budgetController from "../../controllers/budget/index.js"
// Middlewares
import authenticateToken from "../../middlewares/auth/authenticateToken.js"
// Defining router
const budgetRouter = express.Router()
// Routers
budgetRouter.get("/", authenticateToken, budgetController.getBudget)
budgetRouter.post("/", authenticateToken, budgetController.createBudget)
budgetRouter.get("/:id", authenticateToken, budgetController.getBudgetById)
budgetRouter.patch("/:id", authenticateToken, budgetController.updateBudgetById)
budgetRouter.delete(
  "/:id",
  authenticateToken,
  budgetController.deleteBudgetById
)
budgetRouter.delete("/", authenticateToken, budgetController.deleteBudget)
export default budgetRouter
