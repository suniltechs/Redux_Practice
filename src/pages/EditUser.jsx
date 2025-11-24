import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsers } from '../slices/userSlice'

const EditUser = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const users = useSelector((state) => state.usersInfo.users)
  const existingUser = users.find((user) => user.id === Number(id))

  const [data, setData] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    contact: ""
  })

  useEffect(() => {
    if (existingUser) {
      setData(existingUser)
    }
  }, [existingUser])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUsers(data))
    navigate("/users")  // go back to user list
  }

  return (
    <div className='container'>
      <h2>Edit User</h2>
      <form>
        <label>Name</label>
        <input name="name" value={data.name} onChange={handleChange} /> <br />

        <label>Age</label>
        <input name="age" value={data.age} onChange={handleChange} /> <br />

        <label>Email</label>
        <input name="email" value={data.email} onChange={handleChange} /> <br />

        <label>Contact</label>
        <input name="contact" value={data.contact} onChange={handleChange} /> <br />

        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  )
}

export default EditUser
