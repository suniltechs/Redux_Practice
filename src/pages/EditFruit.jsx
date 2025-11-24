import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editFruit } from '../slices/fruitSlice'

const EditFruit = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()

    const fruit = useSelector((state) => state.fruitsInfo.fruits)

    const existingValue = fruit.find((item) => item.id === Number(id))

    const [myFruit, setMyFruit] = useState({
        id: '',
        name: '',
        color: ''
    })

    useEffect(() => {
        if(existingValue){
            setMyFruit(existingValue)
        }
    }, [existingValue])

    const handleChange = (e) => {
        e.preventDefault()
        setMyFruit({...myFruit, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editFruit(myFruit))
        navigate('/fruits')
    }

  return (
    <div className='container'>
        <h1>Edit Fruit</h1>

        <label htmlFor="">Edit Fruit</label>
        <input type="text" name='name' value={myFruit.name} onChange={handleChange} /><br />
        <label htmlFor="">Edit Color</label>
        <input type="text" name='color' value={myFruit.color} onChange={handleChange} /> <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EditFruit