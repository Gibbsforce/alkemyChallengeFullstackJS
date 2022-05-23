import test from "node:test"
import assert from "node:assert"
import { PORT } from "../src/utils/globalConstants.js"

// API
const API_URL = `http://localhost:${PORT}/api`

// Variables for test
const userTest = {
  email: "test@test.test",
  name: "Test",
  password: "test0000",
}
let token
const budgetTest1 = {
  concept: "Test",
  amount: 100,
  type: "expense",
  category: "Food",
}
const budgetTest2 = {
  concept: "Test2",
  amount: 200,
  type: "expense",
  category: "Other",
}
let _id

// Testing
// Auth Testing
test("POST /api/auth/signup", async () => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userTest),
  })
  const data = await response.json()
  assert.equal(response.status, 201)
  assert.equal(data.message, "OK")
})
test("POST /api/auth/login", async () => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userTest),
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
  token = data.token
})
test("GET /api/auth/user", async () => {
  const response = await fetch(`${API_URL}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
  assert.equal(data.user.email, userTest.email)
  assert.equal(data.user.name, userTest.name)
})
// Budget Testing
test("POST /api/budget", async () => {
  const response = await fetch(`${API_URL}/budget`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetTest1),
  })
  const data = await response.json()
  assert.equal(response.status, 201)
  assert.equal(data.message, "OK")
  _id = data.budget
})
test("POST /api/budget", async () => {
  const response = await fetch(`${API_URL}/budget`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetTest2),
  })
  const data = await response.json()
  assert.equal(response.status, 201)
  assert.equal(data.message, "OK")
})
test("GET /api/budget", async () => {
  const response = await fetch(`${API_URL}/budget`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
  assert.equal(data.budget[0].concept, budgetTest1.concept)
  assert.equal(data.budget[0].amount, budgetTest1.amount)
  assert.equal(data.budget[0].type, budgetTest1.type)
  assert.equal(data.budget[0].category, budgetTest1.category)
  assert.equal(data.budget[0].user.email, userTest.email)
  assert.equal(data.budget[0].user.name, userTest.name)
  assert.equal(data.budget[1].concept, budgetTest2.concept)
  assert.equal(data.budget[1].amount, budgetTest2.amount)
  assert.equal(data.budget[1].type, budgetTest2.type)
  assert.equal(data.budget[1].category, budgetTest2.category)
  assert.equal(data.budget[1].user.email, userTest.email)
  assert.equal(data.budget[1].user.name, userTest.name)
})
test("GET /api/budget/:id", async () => {
  const response = await fetch(`${API_URL}/budget/${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
  assert.equal(data.budget.concept, budgetTest1.concept)
  assert.equal(data.budget.amount, budgetTest1.amount)
  assert.equal(data.budget.type, budgetTest1.type)
  assert.equal(data.budget.category, budgetTest1.category)
})
test("PATCH /api/budget/:id", async () => {
  const response = await fetch(`${API_URL}/budget/${_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetTest2),
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
  assert.equal(data.budget.concept, budgetTest2.concept)
  assert.equal(data.budget.amount, budgetTest2.amount)
  assert.equal(data.budget.category, budgetTest2.category)
})
test("DELETE /api/budget/:id", async () => {
  const response = await fetch(`${API_URL}/budget/${_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
})
test("DELETE /api/budget", async () => {
  const response = await fetch(`${API_URL}/budget`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
})
test("DELETE /api/auth/user", async () => {
  const response = await fetch(`${API_URL}/auth/user`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  assert.equal(response.status, 200)
  assert.equal(data.message, "OK")
})
