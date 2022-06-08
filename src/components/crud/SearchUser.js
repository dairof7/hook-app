import React, { useState } from 'react'

export const SearchUser = ({ list, setList }) => {
    const [id, setId] = useState('')
    const [user, setUser] = useState({
        name: '',
        email: '',
        cedula: 0
    })
    const handleSearch = (e) => {
        e.preventDefault()
        const foundUser = list.filter(row => row.cedula === id)
        if (foundUser.length > 0) {
                setUser({
                    name: foundUser[0].name,
                    email: foundUser[0].email,
                    cedula: foundUser[0].cedula
                })
        }else{
            setUser({
                name: '',
                email: '',
                cedula: ''
            })

        }
    }
    console.log(user)
    const handleDel = ({target}) => {
        setId(target.value)
    }
return (
    <>
    <form>
        <h1>Search User by Id</h1>
        <hr />
            <input 
                type='text'
                placeholder='Cedula'
                autoComplete='false'
                name = 'delId'
                onChange={handleDel}
                />

            <button className='btn btn-outline-primary'
                onClick={handleSearch}
                >Search</button>
        </form>
        <p>{user.name}</p>
        <p>{user.cedula}</p>
        <p>{user.email}</p>
    </>
  )
}
