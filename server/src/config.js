import env from "dotenv"
export const dotenv = env.config({ silent: true })
export const options = {
  file: {
    path: "./DB",
  },
  sql: {
    client: "sqlite3",
    connection: {
      filename: "./DB/api.sqlite",
    },
    useNullAsDefault: true,
  },
}
