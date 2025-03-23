import { BrowserRouter, Routes, Route } from "react-router-dom"
import WelcomePage from "./pages/Welcomepage"
import AuthPage from "./pages/AuthPage"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

