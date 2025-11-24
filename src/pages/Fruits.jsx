import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFruit } from '../slices/fruitSlice'
import { Link } from 'react-router-dom'

const Fruits = () => {

    const dispatch = useDispatch()

    const fruits = useSelector((state) => state.fruitsInfo.fruits)

    const handleDelete = (id) => {
        dispatch(deleteFruit(id))
    }

    console.log(fruits)


  return (
    <div className='fruit-list'>
        {fruits.map((item, index) => (
            <div key={index} className='fruit-card'>
                <h1>{item.name}</h1>
                <h2>{item.color}</h2>
                <div className='card-actions'>
                <button onClick={() =>handleDelete(item.id) }>Delete</button>
                    <Link to={`/fruits/edit/${item.id}`}>
                    <button>Edit</button>
                    </Link>
                </div>

            </div>
        ))}
    </div>
  )
}

export default Fruits