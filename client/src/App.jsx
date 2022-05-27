// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Context
import UserProvider from "./contexts/UserContext"
// Compoenents
import Footer from "./components/Footer"
import RequireAuth from "./components/RequireAuth"
// Pages
import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import Expenses from "./pages/Expenses"
import Incomes from "./pages/Incomes"
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
          <Route path="/*" element={<div>Not Found</div>} />
        </Routes>
        <Footer />
        <GlobalStyles />
      </UserProvider>
    </Router>
  )
}
export default App
