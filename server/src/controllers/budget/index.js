import persistence from "../index.js"
const { budgetDAO } = persistence
// Controllers
const getBudget = async (req, res) => {
  try {
    const budgets = await budgetDAO.getAll()
    const userBudget = budgets.filter(
      ({ user }) => user.email === req.user.email
    )
    res.status(200).json({
      message: "OK",
      budget: userBudget,
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
    const budgets = await budgetDAO.getAll()
    const userBudget = budgets.filter(
      ({ user }) => user.email === req.user.email
    )
    const { id } = req.params
    if (!userBudget.map(({ _id }) => _id.toString()).includes(id))
      return res.status(404).json({ message: "Not found" })
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
    const budgets = await budgetDAO.getAll()
    const userBudget = budgets.filter(
      ({ user }) => user.email === req.user.email
    )
    const { id } = req.params
    if (!userBudget.map(({ _id }) => _id.toString()).includes(id))
      return res.status(404).json({ message: "Not found" })
    const previousBudget = await budgetDAO.getById(id)
    const { concept, amount, type } = req.body
    const budget = {
      ...previousBudget,
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
    const budgets = await budgetDAO.getAll()
    const userBudget = budgets.filter(
      ({ user }) => user.email === req.user.email
    )
    const { id } = req.params
    if (!userBudget.map(({ _id }) => _id.toString()).includes(id))
      return res.status(404).json({ message: "Not found" })
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
    const budgets = await budgetDAO.getAll()
    const userBudget = budgets.filter(
      ({ user }) => user.email === req.user.email
    )
    if (userBudget.length === 0)
      return res.status(404).json({ message: "Not found" })
    for (let i = 0; i < userBudget.length; i++) {
      await budgetDAO.deleteById(userBudget[i]._id.toString())
    }
    res.status(200).json({
      message: "OK",
      budget: true,
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
