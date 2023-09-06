import React ,{useEffect} from 'react'
import { useSearchParams } from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice'
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
 
const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const dispatch=useDispatch();
    useEffect(() => {
      dispatch(closeMenu())
    }, [])
    
  return (
    <div>
      <div className='flex'>
       <iframe
       className='flex-2 w-[77vw] h-[50vh]'
    src={"https://www.youtube.com/embed/"+searchParams.get('v')}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
   
   <LiveChat/>
    
  
</div>
<h2 className=''>Comment Section💬</h2>
<CommentContainer/>
  </div>
  )
}

export default WatchPage