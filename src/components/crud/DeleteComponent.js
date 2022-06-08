import React, { useState } from 'react'

export const DeleteComponent = ({ list, setList}) => {
    const [delId, setDelId] = useState('')
    
    const handleDelete = (e) => {
        e.preventDefault()
        console.log(`valor a borrar ${delId}`)
        const newLits = list.filter(row => row.cedula !== delId)

        setList(newLits)
    }
    
    const handleDel = ({target}) => {
        setDelId(target.value)
    }

  return (
    <form>
        <h1>Delete User by Id</h1>
        <hr />
            <input 
                type='text'
                placeholder='Cedula'
                autoComplete='false'
                name = 'delId'
                onChange={handleDel}
            />

            <button
                onClick={handleDelete}
            >Delete</button>
        </form>
  )
}
