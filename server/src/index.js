import { dotenv } from "./config.js"
import express from "express"
import router from "./routers/index.js"
import { PORT } from "./utils/globalConstants.js"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)
app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}, url: http://localhost:${PORT}`)
)
app.on("error", (err) => console.error(err))
