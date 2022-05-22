import budgetCategory from "../../utils/budgetCategory.js"
export const createBudgetValidation = (req, res, next) => {
  const { concept, amount, type, category } = req.body
  if (!concept || !amount || !type || !category)
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Missing fields" })
  if (!Number(amount))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid number format" })
  if (
    !budgetCategory
      .map(({ name }) => name.toLocaleLowerCase())
      .includes(category.toLowerCase())
  )
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid category" })
  if (type.toLowerCase() !== "income" && type.toLowerCase() !== "expense")
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid type" })
  next()
}
export const updateBudgetValidation = (req, res, next) => {
  const { amount, category } = req.body
  if (!Number(amount))
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid number format" })
  if (
    !budgetCategory
      .map(({ name }) => name.toLocaleLowerCase())
      .includes(category.toLowerCase())
  )
    return res
      .status(400)
      .json({ message: "Bad Request", description: "Invalid category" })
  next()
}
