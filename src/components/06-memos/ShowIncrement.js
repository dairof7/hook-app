import React from 'react'

export const ShowIncrement = React.memo(( {increment} ) => {
  
    
    console.log('again')
    const handleButton = () => {
        increment(5)
    }
    return (
    <button onClick={ handleButton }>+1</button>
  )
})
