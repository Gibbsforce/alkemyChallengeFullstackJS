import express from "express"
import router from "./routers/index.js"
import { PORT } from "./utils/globalConstants.js"
const app = express()
app.use("/api", router)
app.listen(PORT, () =>
  console.log(`Listening on port: ${PORT}, url: http://localhost:${PORT}`)
)
app.on("error", (err) => console.error(err))
