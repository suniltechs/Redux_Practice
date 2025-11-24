import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFruits } from '../slices/fruitSlice'

const NewHome = () => {


    const dispatch = useDispatch()

    const [fruit, setFruit] = useState({
        id: '',
        name: '',
        color: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFruit({...fruit, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setFruits({...fruit, id: Date.now()}))
    }



  return (
    <div className='container'>
        <form>
            <label>Fruit : <input name='name'  type="text" value={fruit.name} onChange={handleChange} /></label> <br />
            <label>Color : <input name='color'  type="text" value={fruit.color} onChange={handleChange} /></label> <br />
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default NewHome