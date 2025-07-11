import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Login from "./Login"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
