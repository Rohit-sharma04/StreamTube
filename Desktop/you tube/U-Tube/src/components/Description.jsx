import { API_KEY } from "../utils/constant"
import { useState, useEffect } from "react"
import { convertToAgo, formater } from "../utils/helperFunction"
import { Link } from "react-router-dom"
const Description = ({ channelId, channelTitle, description, publishedAt, title, thumbnail, commentCount, likeCount, viewCount }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [channelData, setChannelData] = useState({})
    const [isReadMore, setIsReadMore] = useState(false)




    const getChannelData = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + channelId + "&key=" + API_KEY)
        const json = await data.json()
        console.log("channel data", json.items[0])
        setChannelData(json.items[0])
    }

    useEffect(() => {

        getChannelData()
    }, [channelId])




    return (

        <div className="w-fit ">
            <h1 className="text-2xl font-semibold">{title}</h1>

            <div className="flex justify-between py-5">
                <div className="flex ">
                    <Link to={`/channel/${channelId}`}>
                    <img src={channelData?.snippet?.thumbnails?.default?.url} alt="img" className="  w-11  rounded-full" /></Link>
                    <div className="flex flex-col ml-4">
                        <Link to={`/channel/${channelId}`}> <h1 className="font-bold ">{channelTitle}</h1></Link>
                        <h1 className="text-sm"> {formater(`${channelData?.statistics?.subscriberCount}`)} Subscribers</h1>
                    </div>
                    <div>
                        <button className="px-2 sm:px-4  py-2 sm:text-lg bg-black text-white font-semibold   rounded-3xl cursor-pointer sm:ml-8 mx-2 text-sm" >Subscribe</button>
                    </div>
                </div>
                <div className="flex w-24 h-10 sm:h-auto sm:w-auto  ">
                    <button className="rounded-l-3xl  text-sm px-1  sm:text-sm bg-slate-200  hover:bg-slate-300 sm:px-2 cursor-pointer ">👍🏼{formater(`${likeCount}`)} </button>
                    <button className="rounded-r-3xl sm:text-sm bg-slate-200  hover:bg-slate-300 sm:px-2 cursor-pointer">👎🏼</button>
                </div>


            </div>

            <div className="flex">
                <h1 className="font-semibold"> {formater(`${viewCount}`)}  views</h1>

                <h1 className="font-semibold ml-4"> {convertToAgo(publishedAt)}</h1>
            </div>


            {/* <div className=" bg-stone-200  rounded-lg p-2 mt-2">
                <div>
                    <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>{isOpen ? '🔼 Hide' : '🔽 Show'}</button>
                </div>
                <div className="whitespace-pre-wrap ">{isOpen ? (description) : null} </div>
            </div> */}
            <div className=" bg-stone-200  rounded-lg p-2 mt-2">
            {isReadMore ? <span className=' whitespace-pre-wrap leading-6 break-all'> {description} </span> : <span   className='whitespace-pre-wrap break-all  leading-6'> {description?.substring(0, 30)}...</span>}
                    <button className='font-semibold' onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? "  readless" : "  readmore"}</button>
            </div>
            {/* <div>
                    {isReadMore ? <span className=' whitespace-pre-wrap leading-6'>{channelDetails?.snippet?.description}  </span> : <span className=' whitespace-pre-wrap leading-6'>{channelDetails?.snippet?.description.substring(0, 300) } ...</span>}
                    <button onClick={() => setIsReadMore(!isReadMore)}>{isReadMore ? "  readless" : "  readmore"}</button>
                </div> */}


        </div>
    )
}

export default Description
