// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Compoenents
import Footer from "./components/Footer"
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
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/incomes" element={<Incomes />} />
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </Router>
  )
}
export default App
