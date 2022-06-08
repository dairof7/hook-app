import React, { memo } from 'react'

export const Small = memo(( {value} ) => {
    console.log('again :(')
  return (
    <small>{value}</small>
  )
})
