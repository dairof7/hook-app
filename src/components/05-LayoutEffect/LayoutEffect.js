import { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'

export const LayoutEffect = () => {
  
	const { state, increment} = useCounter( 1 )
	
	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
	
	const quote = !!data && data[0].quote
	const tag = useRef()
	useLayoutEffect(() => {
	  console.log(tag.current.getBoundingClientRect())
	
	  
	}, [quote])

	return (
	<div>
			<h1>LayoutEffect</h1>
			<hr />

            <blockquote className='blockquote'>
            <p ref={tag} className='mb-01'> {quote} </p>
            </blockquote>

			<button onClick={ increment } className='btn btn-primary'> Next </button>
			

	</div>
  )
}
