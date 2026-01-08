import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-header">
        <h1>Country <span>Explorer</span></h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
