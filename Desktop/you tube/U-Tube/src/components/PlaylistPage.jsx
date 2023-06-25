import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../utils/constant'

import PlaylistCard from './PlaylistCard'
import PlaylistShimmer from '../Shimmers/PlaylistShimmer'



const PlaylistPage = () => {

    const [videos, setVideos] = useState([])
    const { playlistId } = useParams()

    const getVideos = async () => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=" + playlistId + "&key=" + API_KEY)
        const json = await data.json()
        console.log("playlist videos", json.items)
        setVideos(json.items)
    }

    useEffect(() => {
        getVideos()
    }, [playlistId])
 return (
       
    Boolean(!videos.length) ? 
     <PlaylistShimmer/> 
   :
         <div className=' sm:flex sm:ml-5 '>
            <div className='sm:w-1/4 sm:h-full sm:fixed        bg-slate-300    my-3 rounded-3xl w-fit max-w-lg p-2'>
                <img src={videos[0]?.snippet?.thumbnails?.medium?.url} className='rounded-x w-full rounded-t-3xl pb-3' />
                <Link to={"/channel/" + videos[0]?.snippet?.channelId}>
                    <h1 className='text-2xl font-semibold pb-3'>{videos[0]?.snippet?.channelTitle}</h1>
                </Link>
                <h1 className=' whitespace-break-spaces text-sm '> {videos[0]?.snippet?.description.substring(0, 300)}</h1>
            </div>
            
            <div className=' sm:w-1/2 w-full mx-1 md:ml-1 lg:w-9/12 lg:ml-[30%] lg:pl-8 '>
                {videos.map((video) => <PlaylistCard key={video.id} {...video.snippet} />)}
            </div>
        </div>
    )
}

export default PlaylistPage