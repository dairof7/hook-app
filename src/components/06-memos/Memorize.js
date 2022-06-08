import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './memo.css'
import { Small } from './Small';
export const Memorize = () => {
    const [show, setShow] = useState(true)
    const {state, increment} = useCounter(10);
    return (
    <div>
        <h1>
        Memorize
        </h1>
        <hr />
        <h2>
            <Small value={state} />
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
