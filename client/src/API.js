// Getting endpoints
import { BUDGET, AUTH_SIGNUP, AUTH_LOGIN, AUTH_USER } from "./config"

// Default config for http requests
const defaultConfigPost = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
}
const defaultConfigPatch = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
}
const defaulConfigDelete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
}

// API settings
const apiSettings = {
  fetchSignUp: async (user) => {
    const endpoint = AUTH_SIGNUP
    const data = {
      ...defaultConfigPost,
      body: JSON.stringify(user),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchLogin: async (user) => {
    const endpoint = AUTH_LOGIN
    const data = {
      ...defaultConfigPost,
      body: JSON.stringify(user),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchUser: async (token) => {
    const endpoint = AUTH_USER
    const data = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchCreateBudget: async (token, budget) => {
    const endpoint = BUDGET
    const data = {
      ...defaultConfigPost,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(budget),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchGetBudgets: async (token) => {
    const endpoint = BUDGET
    const data = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchGetBudget: async (token, id) => {
    const endpoint = `${BUDGET}/${id}`
    const data = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchPatchBudget: async (token, id, budget) => {
    const endpoint = `${BUDGET}/${id}`
    const data = {
      ...defaultConfigPatch,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(budget),
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchDeleteBudget: async (token, id) => {
    const endpoint = `${BUDGET}/${id}`
    const data = {
      ...defaulConfigDelete,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
  fetchDeleteBudgets: async (token) => {
    const endpoint = BUDGET
    const data = {
      ...defaulConfigDelete,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    return await (await fetch(endpoint, data)).json()
  },
}
export default apiSettings
