import React from 'react'

const VideoCard = ({info}) => {
  
 
   const {snippet,statistics}=info;
  
    const{channelTitle,title,thumbnails}=snippet;
   

  return (
 
<div className='p-2 flex-row items-center justify-center w-[20vw] h-[40vh] shadow-lg hover:scale-105 transition-transform overflow-hidden'>
<img className="rounded-md" src={thumbnails.medium.url} alt="" />  
<div className="imgDescription flex items-center gap-2">
<img className="rounded-[50vw] w-12 h-10" src={thumbnails.medium.url} alt="" />  
<ul className=''>
    <li className="text-[1vw]">{title}</li>
    <li className="text-[1vw] font-bold">{channelTitle}</li>
    <li>{statistics.viewCount}views</li>
</ul>
</div>

</div>
  )
}

export default VideoCard