import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])





    return (
        <div>
            <h2>User List</h2>
            <ul>

                {users.map(usr=>(
                    <li key={usr.id}>
                        <h2>{usr.name}</h2>
                    </li>
                ))}
                {/* {users.map(usr => (
            <li key={usr.id}>
                
                <h3>{usr.name}</h3>
                <p>Email: {usr.email}</p>
            </li>
        ))} */}
            </ul>
        </div>
    )
}

export default UserList
