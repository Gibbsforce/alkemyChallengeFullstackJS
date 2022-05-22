import jwt from "jsonwebtoken"
export const token = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "5h",
    }
  )
  return token
}
