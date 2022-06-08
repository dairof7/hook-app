import React, { useCallback, useState } from 'react'
import './memo.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)
//   const increment = () => {
//       setCounter(counter + 1)
//   }
  const increment = useCallback(
    (inc) => {
        setCounter(c => c + inc)
    }, [setCounter]
  )
  

  return (
    <div>
        <h1>
            CallBackHook {counter}
        </h1>
        <hr />
        <ShowIncrement increment = { increment }/>
    </div>
  )
}
