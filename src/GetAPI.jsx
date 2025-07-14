import React, { useEffect, useState } from 'react'

function GetAPI() {
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        usersDataGet()
    }, [])
    async function usersDataGet() {
        const url = "https://dummyjson.com/users"
        let response = await fetch(url);
        response = await response.json()
        //console.log(response.users);
        setUsersData(response.users)

    }
    //console.log(usersData);


    return (
        <div>
            <h1>GetAPI</h1>
            {
                usersData && usersData.map((user) => (
                    <h2>{user.firstName}</h2>
                ))
            }
        </div>
    )
}

export default GetAPI