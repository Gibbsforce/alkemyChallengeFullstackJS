// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Context
import UserProvider from "./contexts/UserContext"
// Compoenents
import RequireAuth from "./components/RequireAuth"
// Pages
import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Expenses from "./pages/Expenses"
import Incomes from "./pages/Incomes"
import NotFound from "./pages/NotFound"
// Global Styles
import { GlobalStyles } from "./GlobalStyles"
const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/incomes" element={<Incomes />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyles />
      </UserProvider>
    </Router>
  )
}
export default App
