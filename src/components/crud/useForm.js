import { useState } from "react"

export const useForm = ( initialState, initialList ) => {
    const [list, setList] = useState(initialList)
    const [data, setData] = useState(initialState)

    const handleInputChange = ( {target} ) => {
        if (target.name === 'cedula'){
            target.value = parseInt(target.value)
        }
        setData({
            ...data,
            [target.name]: target.value,
        })
    }
    const handleSave = (e) => {
        e.preventDefault()
        setList([...list, data])
        setData({
            name: '',
            email: '',
            cedula: 0
        })
    }
    return [handleInputChange, data, handleSave, list, setList]
}
