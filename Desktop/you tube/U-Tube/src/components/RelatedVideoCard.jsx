import { Link } from "react-router-dom"
import { convertToAgo } from "../utils/helperFunction"


const RelatedVideoCard = ({ videoId, channelId, playlistId, title, description, thumbnails, channelTitle, publishTime, liveBroadcastContent }) => {
    // thumbnails.medium.url medium
    return (
        <Link to={`/watch/v/${videoId}`}>
            <div>
                                {/* mr-5 */}
                <div className="flex ">
                    {
                        videoId ? <img className=" w-2/5 aspect-video rounded-xl  m-2 " src={thumbnails.medium.url} alt="card" />
                            : <img className="w-1/2 aspect-video rounded-xl  m-2 " src={thumbnails.medium.url} alt="card" />

                    }
                              {/* pr-32 */}
                    <div className=" p-4 overflow-hidden   ">
                    {/* mb-2 text-sm font-bold  h-10 w-1/2 overflow-hidden tracking-tight text-gray-900 */}
                        <h5 className="text-sm font-bold h-10 overflow-hidden  text-ellipsis mb-2 ">{title}</h5>
                        
                        {playlistId ? <h1>playlist</h1> : <h1></h1>}
                        <h1 className="text-xs"> {convertToAgo(publishTime)}</h1>
                        <h1 className="text-xs">{channelTitle}</h1>
                        {/* <p className="mb-3 font-normal   text-gray-700 dark:text-gray-400">{description}</p> */}
                    </div>
                </div>


            </div>
        </Link>
    )
}

export default RelatedVideoCard
