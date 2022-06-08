import { useState } from "react"


export const useForm = ( initialState, lista ) => {
    
    const [values, setValues] = useState({initialState})

    const handleInputChange = ({target}) => {
        setValues({
          ...values,
          [target.name]: target.value
    
        })
      }
    return [values, handleInputChange];
}
