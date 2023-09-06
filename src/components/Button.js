import React from 'react'

const Button = ({name}) => {
    
  return (
    <div className='flex'>
        <button className='bg-gray-400 m-2 h-6 pr-2 pl-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button