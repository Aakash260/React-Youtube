import React ,{useEffect,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from "../utils/chatSlice"
import  NameGenerator  from '../utils/NameGenerator'
import {GenerateRandomMessage} from '../utils/NameGenerator'
const LiveChat = () => {
const [comment, setComment] = useState("")
   
    const dispatch=useDispatch();
const selector=useSelector((store)=>store.chat.messages);

    useEffect(() => {
       const i=setInterval(()=>{
        dispatch(addMessage({
            name:NameGenerator(),
            message:GenerateRandomMessage()
        }))
       },1500)
  
      return () => {
       clearInterval(i)
      }
    }, [])
    
  return (
    <div>
    <div>Live Comments</div>
    <div className='w-[20vw] h-[50vh] border-2 border-black overflow-y-scroll'>

       {selector.map((c,i)=>{
     
     return <ChatMessage key={i} name={c.name} message={c.message}/>

       })}
      
        </div>
        <form className="submitComment flex" 
        onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({
            name:"You",
            message:comment
        }));
        setComment('')

        }
        
        }>
            <input className='border-2 border-black' type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
             <button className='border-2 border-black font-bold' >Comment</button>
        </form>
        </div>
  )
}

export default LiveChat