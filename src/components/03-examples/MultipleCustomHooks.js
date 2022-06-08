import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './effects.css'
export const MultipleCustomHooks = () => {
  
	const {state, increment} = useCounter(1)
	
	const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)
	// const quote = 'hola'
	
	
	const author = data?data[0].author:null
	// const author = !!data && data[0].author
	const quote = !!data && data[0].quote
	
	return (
	<div>
			<h1>BreakingBad Quotes</h1>
			<hr />
			{
				loading?
				(
					<div className='alert alert-info text-center'> Loading...
					</div>
				)
				:
				(
					<blockquote className='blockquote text-end'>
					<p className='mb-01'> {quote} </p>
					<footer className='blockquote-footer mt-01'> {author} </footer>
					</blockquote>
				)

				
			}
			<button onClick={ increment } className='btn btn-primary'> Next </button>
			

	</div>
  )
}
