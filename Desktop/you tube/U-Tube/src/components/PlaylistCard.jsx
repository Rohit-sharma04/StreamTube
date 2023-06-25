
import { convertToAgo } from '../utils/helperFunction'
import {Link} from 'react-router-dom'

const PlaylistCard = ({ channelTitle,channelId, description, publishedAt, resourceId, thumbnails, title }) => {

    const time = convertToAgo(publishedAt)


    return (
          <Link to={"/watch/v/"+resourceId.videoId}>
            <div className='flex py-4  w-full'>
                <img src={thumbnails.medium.url} alt='thumbnail' className='mx-2 rounded-xl  w-1/2  ' />
                <div>
                    <h2 className='text-gray-900 font-bold h-12 overflow-hidden sm:h-auto sm:overflow-visible'>{title}</h2>
                    
                    <h2 className='text-gray-900 font-bold'>{channelTitle}</h2>
                   
                    <h2>{time}</h2>
                </div>
            </div>
            </Link>
      
    )
}

export default PlaylistCard