import jwt from "jsonwebtoken"
export const token = (user) => {
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: `${process.env.JWT_EXPIRES_IN}`,
    }
  )
  return token
}
