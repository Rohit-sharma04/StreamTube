
import { useParams } from 'react-router-dom'
import { API_KEY } from '../utils/constant'
import { formater } from '../utils/helperFunction'
import { useState, useEffect } from 'react'

import ChannelVideoCard from './ChannelVIdeoCard'
import ChannelShimmer from '../Shimmers/ChannelShimmer'
const ChannelPage = () => {
    const { channelId } = useParams()
    const [channelDetails, setChannelDetails] = useState({})
    const [channelVideos, setChannelVideos] = useState([])
    const [isReadMore, setIsReadMore] = useState(false)

    const getChannelDetails = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + channelId + "&key=" + API_KEY)
        const json = await data.json()
        console.log("channel detail", json.items[0])
        setChannelDetails(json.items[0])
    }

    const getvideosByChannel = async () => {
        const data = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + API_KEY + '&channelId=' + channelId + '&part=snippet,id&order=date&maxResults=20')
        const json = await data.json()
        console.log("video by channel id", json.items)
        setChannelVideos(json.items)

    }

    useEffect(() => {
        getChannelDetails()
        getvideosByChannel()
    }, [channelId])

    return (
        !Object.keys(channelDetails).length ? <ChannelShimmer/>:
        <div className='flex flex-col w-full'>
            <div className='flex flex-col items-center px-10 py-5 block'>
                <img src={channelDetails?.snippet?.thumbnails?.high?.url} className='h-52 rounded-full' />
                <h1 className='font-bold text-2xl p-5'>{channelDetails?.snippet?.title}</h1>
                <div className='flex  pb-4'>
                    <h1 className='px-4'>{formater(channelDetails?.statistics?.subscriberCount)} Subscribers</h1>
                    <h1 className='px-4' >{channelDetails?.statistics?.videoCount} Videos</h1>
                    <h1 className='px-4'>{formater(channelDetails?.statistics?.viewCount)} Views</h1>
                </div>
                <div>
                    <button className=" px-10 py-2 text-lg bg-black text-white font-semibold   rounded-3xl cursor-pointer mx-auto mb-4">

                        Subscribe
                    </button>
                </div>
                {/* start */}
                <div>
                    {isReadMore ? <span className=' whitespace-pre-wrap leading-6'>{channelDetails?.snippet?.description}  </span> : <span className=' whitespace-pre-wrap leading-6'>{channelDetails?.snippet?.description.substring(0, 300) } ...</span>}


                    {/* {isReadMore ? <span>Readless</span> : <span>Readmore</span>} */}

                    <button onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? "  readless" : "  readmore"}</button>
                </div>
                {/* end */}
                {/* <h1 className=' whitespace-pre-wrap leading-6'>{channelDetails?.snippet?.description}</h1> */}





            </div>
            <div className='block'>
                {/* <h1>Videos</h1> */}
                <div className='flex flex-wrap justify-center'>
                {
                    channelVideos?.map((channelVIdeo, index) => {
                        return (<ChannelVideoCard key={index}  {...channelVIdeo} />)
                    })


                }</div>
                
                    {/* <SearchResultCard key={index}  {...{ ...channelVIdeo.id, ...channelVIdeo.snippet }} /> */}
            </div>
        </div>
    )
}

export default ChannelPage
