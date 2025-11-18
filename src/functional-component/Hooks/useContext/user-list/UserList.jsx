import React, { useContext } from 'react'
import { UserApiContext } from './UserApiContext'
import { FaUsers } from "react-icons/fa";

function UserList() {
    const {users, loading} = useContext(UserApiContext);

    if (loading) return <p>Loading...</p>
  return (
    <div>
      <h2><FaUsers />Users</h2>
      <ul>
        {users.map((usr) => (
          <li key={usr.id}>
          {usr.name} - {usr.email}
          </li>

      
      ))}
      </ul>
    </div>
  )
}

export default UserList
