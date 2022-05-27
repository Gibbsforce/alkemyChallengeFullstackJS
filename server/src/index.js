import { dotenv } from "./config.js"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import router from "./routers/index.js"
import { PORT } from "./utils/globalConstants.js"
const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)
app.get("*", (req, res) => res.status(404).json({ message: "Not Found" }))
app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}, url: http://localhost:${PORT}`)
)
app.on("error", (err) => console.error(err))
