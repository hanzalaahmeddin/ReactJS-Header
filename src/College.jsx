import React from 'react'
import { NavLink, Outlet } from 'react-router'

function College() {
  return (
    <div style={{ background: "#ebeeff", height: "100vh", padding: "50px 50px", textAlign: "center" }}>
      <h1 style={{ margin: "0" }}>College Page</h1>
      <NavLink to="student">Student</NavLink>
      <NavLink to="department">Department</NavLink>
      <NavLink to="details">Details</NavLink>
      <Outlet />
    </div>
  )
}

export default College