import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

export const CounterWithCustomHook = () => {
  const  {state:count, increment, decrement, reset} = useCounter(5)
  return (
  <div>
      <h1>Counter with custom hook</h1>
      <h2>{count}</h2>
      <hr />
      <button 
      className='btn btn-primary'
      onClick={() => increment(2)}>
           + 1
      </button>
      <button
      className='btn btn-danger'
      onClick={() => decrement(2)}>
      - 1
      </button>
      <button
      className='btn btn-danger'
      onClick={reset}>
      Reset
      </button>
  </div>
  );
};
