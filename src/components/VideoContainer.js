import React,{useEffect,useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/content';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  useEffect(() => {
           getVideos()
  }, []);
const [video, setVideo] = useState([])
  const getVideos=async()=>{
 const data=await fetch(YOUTUBE_VIDEOS_API)
const json= await data.json();
  
 setVideo(json.items)
  }
  return <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> 
{video.map((items)=>{
  return <Link key={items.id} to={`/watch?v=${items.id}`}> 
 <VideoCard  info={items}  />
  </Link>
})}
     </div>
    
     </div>
}

export default VideoContainer