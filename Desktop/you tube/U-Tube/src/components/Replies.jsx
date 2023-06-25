import { Link } from "react-router-dom"


const Replies = ({authorChannelId,authorChannelUrl,authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textOriginal}) => {
    
    // console.log("reply",props)
  return (
    <>
   
       <div className='flex p-4 pl-16'>
          
     <Link to={`/channel/${authorChannelId.value}`} > <img alt='profilePic' src={authorProfileImageUrl} className='rounded-full mx-3 h-10'/></Link>
      <div>
      <Link to={`/channel/${authorChannelId.value}`}><h1 className='text-sm font-semibold'>{authorDisplayName}</h1></Link>
      <h1 className='text-sm'>{textOriginal}</h1>
      </div>
    </div>
    </>
  )
}

export default Replies