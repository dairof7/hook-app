import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './memo.css'

export const MemoHook = () => {
    const [show, setShow] = useState(true)
    const {state, increment} = useCounter(5000);

    const process = ( iter ) => {
        for ( let i = 0; i < iter; i++ )
        console.log('gogogo')
        return `iteraciones realizadas {iter}`
    }

    const memoProcess = useMemo(() => process(state), [state])
    return (
    <div>
        <h1>
        Memorize
        </h1>
        <hr />

        <p> {memoProcess} </p>
        <h2>
            <small>
                {state}
            </small>
        </h2>

        <button
            className='btn btn-primary'
            onClick={increment}
        > +1 </button>

        <button
            className='btn btn-outline-primary ml-3'
            onClick={() => {
                setShow(!show)
            }}
        > show / hide {JSON.stringify(show)} </button>
    </div>
  )
}
