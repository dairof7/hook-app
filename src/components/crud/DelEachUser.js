import React from 'react'

export const DelEachUser = ({id, list, setList}) => {
    const handleDelete = (e) => {
        e.preventDefault()
        console.log(`valor a borrar ${id}`)
        const newLits = list.filter(row => row.cedula !== id)

        setList(newLits)
    }
  return (
    <>
        <button onClick={handleDelete}>Del</button>
    </>
  )
}
