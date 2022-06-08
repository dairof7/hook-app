import React, { useState } from 'react';
import './counter.css'
export const CounterApp = () => {
  
  const [count, setcount] = useState({
      c1: 5,
      c2: 10
  });
  const handleAdd = () => {
    //   setcount(count + 1)
    setcount({
        ...count,
        c2:count.c2 + 1

    })
  }
  return( 
  <>

  <h1>Counter {count.c1}</h1>
  <h1>Counter {count.c2}</h1>
  <hr />
  <button 
    onClick={handleAdd}
    className='btn btn-primary'>
      +1
  </button>

  </>
  )
}
