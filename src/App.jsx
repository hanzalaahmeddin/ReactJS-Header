import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Login from "./Login"
import PagenotFound from "./PagenotFound"
import College from "./College"
import Student from "./Student"
import Department from "./Department"
import Details from "./Details"
import Users from "./Users"
import UserDetails from "./userDetails"
import GetAPI from "./GetAPI"

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
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id/:name?" element={<UserDetails />} />
        <Route path="/getapi" element={<GetAPI />} />
      </Routes>
    </>
  )
}

export default App
