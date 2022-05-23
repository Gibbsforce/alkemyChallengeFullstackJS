export const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}
export const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return regex.test(String(password))
}
export const validateName = (name) => {
  const regex = /^[a-zA-Z]{2,}$/
  return regex.test(String(name))
}
