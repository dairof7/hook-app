import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm(
    {
      name: '',
      email: '',
      password: ''
    },
    ['name', 'perro']
  );
  const {name, email, password} = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return(
   <form onSubmit={handleSubmit}>
       <h1>FormWithCustomHook</h1>
       <hr />

       <div className='form-group'>
         <input
         type='text'
         name='name'
         className='form-control'
         placeholder='your name'
         autoComplete='off'
         value={name}
         onChange={handleInputChange}
         >
         </input>
       </div>
       <div className='form-group'>
         <input
         type='text'
         name='email'
         className='form-control'
         placeholder='email@gmai.com'
         autoComplete='off'
         value={email}
         onChange={handleInputChange}
         >
         </input>
       </div>
       <div className='form-group'>
         <input
         type='password'
         name='password'
         className='form-control'
         placeholder='*****'
         autoComplete='off'
         value={password}
         onChange={handleInputChange}
         >
         </input>
       </div>

       <button type='submit' className='btn btn-primary'>Save</button>
   </form>
  )
};
