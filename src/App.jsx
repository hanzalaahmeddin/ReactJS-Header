import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Login from "./Login"
import PagenotFound from "./PagenotFound"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PagenotFound />} />
      </Routes>
    </>
  )
}

export default App
