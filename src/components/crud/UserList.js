import React from 'react'
import { UserDataComponent } from './UserDataComponent'

export const UserList = ({list, setList}) => {
  return (
    <div>
        <h1>
            UserList
        </h1>
        <hr />
            {
                list?
                
                    // ({
                        list.map(user => 
                            
                            <UserDataComponent
                            key={user.cedula}
                            user={user}
                            list={list}
                            setList={setList}/>
                            
                        )
                //     })
                
                :
                (
                <h3>No hay usuarios</h3>
                )
            }
    </div>
  )
}
