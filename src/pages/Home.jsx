import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setUsers} from '../slices/userSlice'


const Home = () => {
    
    const dispatch = useDispatch()
    const [data, setData] = useState({
        id: '',
        name : '',
        age :'',
        email: '',
        contact : ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setData({...data, [e.target.name]: e.target.value})
    }

    console.log(data)

    const addUsers = (e) => {
        e.preventDefault()
        dispatch(setUsers({...data, id: Date.now()}))
    }


  return (
    <div className='container'>
        <form>
            <label htmlFor="">Name</label>
            <input name='name' type="text" value={data.name} onChange={handleChange} /> <br />
            <label htmlFor="">Age</label>
            <input name='age' type="text" value={data.age} onChange={handleChange} /> <br />
            <label htmlFor="">Email</label>
            <input name='email' type="text" value={data.email} onChange={handleChange} /> <br />
            <label htmlFor="">Contact</label>
            <input name='contact' type="text" value={data.contact} onChange={handleChange} /> <br />
            <button type="submit" onClick={addUsers}>Add</button>
        </form>
    </div>
  )
}

export default Home
