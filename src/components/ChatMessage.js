import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex gap-2 overflow-hidden items-center flex-row-reverse'>
    <div className="mt-2">
           <img
               className='rounded-lg'
               id="img"
               alt="Avatar"
               height="32"
               width="32"
               src="https://yt3.ggpht.com/yti/AOXPAcWM118l0cvGE9bSrTzu6hZzwztofGK7dp_nVtuQfhs=s88-c-k-c0x00ffffff-no-rj"
           />
       </div>
   <div className=''>
  <span className='font-bold'>{name}-</span> 
   <span>{message}</span>
   </div>
   </div>
  )
}

export default ChatMessage