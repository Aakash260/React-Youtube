import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list = ["All", "Gaming", "Live", "Soccer", "Cricket", "Cooking"]
  return (
    <div className='flex h-10 shadow-sm items-center gap-2'>
     
      {list.map((item, i) => {
        return <Button key={i} name={item} />
      })}
    </div>
  )
}

export default ButtonList