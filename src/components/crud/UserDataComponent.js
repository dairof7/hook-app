import React from 'react'
import { DelEachUser } from './DelEachUser'

export const UserDataComponent = ({user, list, setList}) => {
  return (
    <div>
      <ul className="list-group list-group-horizontal">
          <li className="list-group-item">{user.name}</li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">{user.cedula}</li>
      </ul>
      <DelEachUser id={user.cedula} list={list} setList={setList}/>
    </div>
    
  )
}
