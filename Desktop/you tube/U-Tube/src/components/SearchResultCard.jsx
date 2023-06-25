import { Link } from "react-router-dom"
import { convertToAgo } from "../utils/helperFunction"


const SearchResultCard = ({ videoId, channelId, playlistId, title, description, thumbnails, channelTitle, publishTime, liveBroadcastContent }) => {
    // thumbnails.medium.url 
    return (
        <div className="sm:mx-5">

            {/* <div className="flex"> */}
            {
                videoId ?
                    <Link to={`/watch/v/${videoId}`}>
                        <div className="flex ">

                            <img className="  w-2/5 sm:w-auto  rounded-xl  m-2 " src={thumbnails.medium.url} alt="card" />

                            <div className=" p-4  ">

                                <h5 className="mb-1 text-sm sm:text-lg   
                                 font-semibold   text-gray-900 h-10   overflow-hidden sm:overflow-visible sm:h-auto">{title?.replace(/&quot;/g, '\"')}</h5>

                                {/* {playlistId ? <h1>playlist</h1> :
                                        videoId ? <h1></h1> : <h1>channel</h1>} */}

                                

                                <h1 className="text-xs sm:text-lg font-semibold">{channelTitle}</h1>
                                {liveBroadcastContent == 'live' ? <h2 className='bg-red-500 inline-block  px-2  rounded-md'>{liveBroadcastContent}</h2> : <h1 className="text-xs sm:text-base"> {convertToAgo(publishTime)}</h1>}
                                {/* <p className="mb-3 font-normal sm:overflow-visible  text-gray-700 dark:text-gray-400 w-1/2 h-10 overflow-hidden">{description}</p> */}

                                <p className="hidden sm:block">{description}</p>

                            </div>

                        </div>
                    </Link>
                    : playlistId ?
                        <Link to={`/playlist/${playlistId}`}>
                            <div className="flex ">
                                {/* <div> */}
                               
                                    <img className="  w-2/5 sm:w-auto   rounded-xl  m-2 " src={thumbnails.medium.url} alt="card" />
                                

                                {/* <div className=" w-[360px] h-10 bg-slate-500 rounded-b-xl m-2 mt=-2 bottom-0 absolute text-right px-7 py-1 opacity-60 font-semibold text-lg hover:bg-slate-500  hover:h-52  hover:text-center hover:rounded-xl  ">playlist</div> */}

                                {/* </div> */}
                                <div className=" p-4   ">
                                    <h5 className="mb-1 text-sm  sm:text-lg font-semibold text-gray-900  h-10   overflow-hidden sm:overflow-visible sm:h-auto">{title?.replace(/&quot;/g, '\"').substring(0, 35)}</h5>

                                    {/* {playlistId ? <h1>playlist</h1> :
                                            videoId ? <h1></h1> : <h1>channel</h1>} */}
                                    {/* <h1 className="text-sm">Playlist</h1> */}

                                    <h1 className="text-xs sm:text-base"> {convertToAgo(publishTime)}</h1>

                                    <h1 className="text-xs sm:text-base font-semibold">{channelTitle}</h1>
                                     
                                    {/* <p className="mb-3 font-normal   text-gray-700 dark:text-gray-400">{description}</p> */}
                                    <p className="hidden sm:block">{description}</p>

                                </div>

                            </div>
                        </Link>
                        :
                        <Link to={`/channel/${channelId}`}>
                            <div className="flex ">
                                <div className=" w-2/5 sm:w-auto  flex m-2   ">
                                    <img className="  self-center  rounded-full m-auto " src={thumbnails.medium.url} alt="card" /></div>
                                <div className=" p-4 ">
                                    <h5 className="mb-1 text-base font-semibold sm:text-lg  text-gray-900 overflow-hidden sm:overflow-visible sm:h-auto">{title?.replace(/&quot;/g, '\"')}</h5>
                                    
                                    {/* {playlistId ? <h1>playlist</h1> :
                                            videoId ? <h1></h1> : <h1>channel</h1>} */}
                                    <h1>Channel</h1>

                                    <h1 className="text-xs"> {convertToAgo(publishTime)}</h1>
                                    <h1 className="text-xs sm:text-base font-semibold">{channelTitle}</h1>
                                    {/* <p className="mb-3 font-normal   text-gray-700 dark:text-gray-400">{description}</p> */}
                                </div>
                            </div>
                        </Link>

            }


            {/* </div> */}


        </div>

    )
}

export default SearchResultCard
