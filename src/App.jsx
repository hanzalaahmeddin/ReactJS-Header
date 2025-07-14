import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Login from "./Login"
import PagenotFound from "./PagenotFound"
import College from "./College"
import Student from "./Student"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PagenotFound />} />
        <Route path="/college" element={<College />}>College
          <Route path="student" element={<Student />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
