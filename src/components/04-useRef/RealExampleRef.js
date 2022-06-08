import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import './effects.css'

export const RealExampleRef = () => {

  const [show, setShow] = useState(false)
  const handleToggle = () => {
      setShow(!show)
  }
  return (
    <div>
        <h1>
            Real example Ref
        </h1>

        {
            show && <MultipleCustomHooks />
        }
        <button
            className='btn btn-primary mt-5'
            onClick={ handleToggle }
        >
            Show / Hide
        </button>
    </div>
  )
}
