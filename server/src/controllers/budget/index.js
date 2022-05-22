import persistence from "../index.js"
const { budgetDAO } = persistence
// Controllers
const getBudget = async (req, res) => {
  try {
    const budget = await budgetDAO.getAll()
    res.status(200).json({
      message: "OK",
      budget: budget,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const createBudget = async (req, res) => {
  try {
    const { concept, amount, type } = req.body
    const budget = {
      concept,
      amount,
      type,
      user: {
        email: req.user.email,
        name: req.user.name,
      },
    }
    const budgetSaved = await budgetDAO.save(budget)
    res.status(201).json({
      message: "OK",
      budget: budgetSaved,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const getBudgetById = async (req, res) => {
  try {
    const { id } = req.params
    const budget = await budgetDAO.getById(id)
    res.status(200).json({
      message: "OK",
      budget: budget,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const updateBudgetById = async (req, res) => {
  try {
    const { id } = req.params
    const { concept, amount, type } = req.body
    const budget = {
      concept,
      amount,
      type,
    }
    const budgetUpdated = await budgetDAO.updateById(id, budget)
    res.status(200).json({
      message: "OK",
      budget: budgetUpdated,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const deleteBudgetById = async (req, res) => {
  try {
    const { id } = req.params
    const budget = await budgetDAO.deleteById(id)
    res.status(200).json({
      message: "OK",
      budget: budget,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
const deleteBudget = async (req, res) => {
  try {
    const budget = await budgetDAO.deleteAll()
    res.status(200).json({
      message: "OK",
      budget: budget,
    })
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      description: error,
    })
  }
}
export default {
  getBudget,
  createBudget,
  getBudgetById,
  updateBudgetById,
  deleteBudgetById,
  deleteBudget,
}
