import React, { useState } from 'react'
import { DeleteComponent } from './DeleteComponent'
import './effects.css'
import { SearchUser } from './SearchUser'
import { useForm } from './useForm'
import { UserList } from './UserList'
export const Crud = () => {

    const [handleInputChange, data, handleSave, list, setList] = useForm({
        name: '',
        email: '',
        cedula: 0
    }, [])
    console.log(list)

  return (
    <>
        <h1>Crud</h1>
        <hr />
        <form>
            <input 
                type='text'
                placeholder='name'
                autoComplete='false'
                name = 'name'
                value={data.name}
                onChange={handleInputChange}
            />
            <input 
                type='number'
                placeholder='Cedula'
                autoComplete='false'
                value={data.cedula||''}
                name = 'cedula'
                onChange={handleInputChange}
            />
            <input 
                type='text'
                placeholder='email@gmail.com'
                autoComplete='false'
                value={data.email}
                name = 'email'
                onChange={handleInputChange}
            />
            <button
                onClick={handleSave}
            >Save</button>
        </form>
        <hr />
        <DeleteComponent  list={list} setList={setList} />
        <SearchUser list={list} setList={setList} />
        <UserList list={list} setList={setList}/>

    </>
  )
}
