import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers } from '../slices/userSlice'

const Users = () => {

  const dispatch = useDispatch()

  const users = useSelector((state) => state.usersInfo.users)

  const handleDelete = (id) => {
    dispatch(deleteUsers(id))
  }
  
  console.log(users)
  return (
    <div className='user-list'>
        {users?.map((item, index) =>
        
        <div key={index} className='user-card'>
          <h1>{item.id}</h1>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
          <h1>{item.email}</h1>
          <h1>{item.contact}</h1>
          <div className="card-actions">
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <Link to={`/users/edit/${item.id}`}><button>Edit</button></Link>
          </div>
        </div>
        
        )}
    </div>
  )
}

export default Users