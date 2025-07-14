import React from 'react'
import { Link } from 'react-router'

function Users() {
    const userData = [
        { id: 1, name: "Hanzala" },
        { id: 2, name: "Akif" },
        { id: 3, name: "Khalid" },
        { id: 4, name: "Mumtaz" },
        { id: 5, name: "Yasir" },
    ]
    return (
        <div style={{ background: "#e5ffbd", height: "100vh", padding: "50px 50px", borderRadius: "20px" }}>
            <h1>User Page</h1>
            {
                userData.map((item) => (
                    <div>
                        <h4><Link to={"/users/" + item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Users