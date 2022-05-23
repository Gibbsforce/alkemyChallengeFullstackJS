// API URL from server
const PORT = 8080
const API_URL = `http://localhost:${PORT}/api`

// Budget enpoint
const BUDGET = `${API_URL}/budget`

// Auth endpoints
const AUTH_SIGNUP = `${API_URL}/auth/signup`
const AUTH_LOGIN = `${API_URL}/auth/login`
// const AUTH_LOGOUT = `${API_URL}/auth/logout`
const AUTH_USER = `${API_URL}/auth/user`

export { BUDGET, AUTH_SIGNUP, AUTH_LOGIN, AUTH_USER }
