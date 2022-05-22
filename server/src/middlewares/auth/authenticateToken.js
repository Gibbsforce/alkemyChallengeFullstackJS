import jwt from "jsonwebtoken"
// Authentication
const authenticateToken = (req, res, next) => {
  const headers = req.headers["x-access-token"] || req.headers["authorization"]
  const token = headers && headers.split(" ")[1]
  if (token == null)
    return res.status(401).json({ message: "No token provided" })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(403).json({
      message: "Invalid token",
    })
  }
}
export default authenticateToken
