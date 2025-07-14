import React from 'react'
import { useParams } from 'react-router'

function UserDetails() {
    const userPerms = useParams()
    return (
        <div style={{ background: "#e5ffbd", height: "100vh", padding: "50px 50px", borderRadius: "20px" }}>
            <h1>User Detail</h1>
            <h3>User Id is: {userPerms.id}</h3>
            <h3>User Id is: {userPerms.name}</h3>

        </div>
    )
}

export default UserDetails