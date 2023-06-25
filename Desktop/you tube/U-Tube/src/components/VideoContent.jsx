/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const VideoContent = ({ id, snippet, statistics }) => {
    // console.log("snippet", snippet)

    const image = snippet?.thumbnails?.medium.url;
    const title = snippet?.title;
    const channelName = snippet?.channelTitle
    const view = statistics.viewCount
    return (
        <div >
            <Link to={`watch/v/${id}`} >
                <div className="m-3 w-80 shadow-lg hover:shadow-2xl rounded-lg">
                    <img className="rounded-lg" src={image} alt="image" />
                    <div className="ml-2">
                        <h1 className="font-bold text-gray-700 h-12 overflow-hidden text-ellipsis">{title}</h1>
                        <h1 className="text-lg text-gray-700">{channelName}</h1>
                        {/* <h1 className="inline h-14"></h1> */}
                        
                        <h1 className="inline "> {Intl.NumberFormat('en-US', {
                            notation: "compact",
                            maximumFractionDigits: 1
                        }).format(`${view}`)} views</h1>
                    </div>
                    
                </div>

            </Link>
        </div>
    )
}

export default VideoContent
