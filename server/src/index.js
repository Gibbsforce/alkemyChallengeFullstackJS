import { dotenv } from "./config.js"
import express from "express"
import { fileURLToPath } from "url"
import path, { dirname } from "path"
import cors from "cors"
import helmet from "helmet"
import router from "./routers/index.js"
import { PORT } from "./utils/globalConstants.js"
const app = express()
const filename = fileURLToPath(import.meta.url)
const dirName = dirname(filename)
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(dirName, "../public")))
app.use("/api", router)
app.get("*", (req, res) =>
  res.sendFile(path.join(dirName, "../public/index.html"))
)
app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}, url: http://localhost:${PORT}`)
)
app.on("error", (err) => console.error(err))
