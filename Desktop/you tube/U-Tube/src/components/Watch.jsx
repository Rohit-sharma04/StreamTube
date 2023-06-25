import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/AppSlice";
import { useParams } from "react-router-dom";
import { commentData } from "../utils/commentData";
import SearchResultCard from "./SearchResultCard";
import { API_KEY } from "../utils/constant";
import RelatedVideoCard from "./RelatedVideoCard";
import Description from "./Description";
import Comments from "./Comments";
import LiveChatSection from "./LiveChatSection";
import { addmessage } from "../utils/LiveChatSlice";


//

// const Comment = ({ name, comment, reply }) => {

//     return (
//         <div className="   border-l-2 pl-10 pr-2 py-3 bg-slate-100 ">

//             <div className="flex">
//                 <div className=" ">
//                     <img alt="img " className="w-9 mr-3 " src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
//                 </div>
//                 <div>
//                     <h1 className="font-bold text-base">{name}</h1>
//                     <h1 className="">{comment.text}</h1>

//                     <h1>👍🏼{comment.likes}  👎🏼{comment.dislikes}</h1>
//                 </div>
//             </div>
//             {
//                 reply.map((comment) => {
//                     return <Comment key={comment.comment.index} {...comment} />
//                 })
//             }
//         </div>

//     )

// }




const Watch = () => {

    const { id } = useParams()
    const dispatch = useDispatch();

    const [relatedVideos, setRelatedVideos] = useState([])
    const [comments, setComments] = useState([])
    const [videoDetails, setVideoDetails] = useState({})
    const [usermessage, setUsermessage] = useState("")

    const getRecommendations = async () => {
        // YOUTUBE_RELATED_VIDEO_API
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=" + id + "&type=video&key=" + API_KEY)
        const json = await data.json()
        console.log(" related", json.items)
        setRelatedVideos(json.items)

    }
    const getVideoDetails = async () => {

        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + id + "&key=" + API_KEY)
        const json = await data.json()
        console.log("details ", json.items[0])
        setVideoDetails(json.items[0])
    }

    const getComments = async () => {
        //YOUTUBE_COMMENTS
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=' + id + '&key=' + API_KEY)
        const json = await data.json()
        console.log("comments", json.items)
        setComments(json.items)
    }


    useEffect(() => {
        dispatch(closeMenu())
        getRecommendations()
        getVideoDetails()
        getComments()
    }, [id])

    const handleSubmit = () => {
        console.log("rohit message")
        dispatch(addmessage({
            name: 'rohit',
            message: usermessage,
            img: "#"
        }))


    }

    return (
        <div className="shadow-lg  w-full  sm:flex">

            <div className="w-full sm:w-3/4">
                {/* <h1>Watch page</h1>
                <h1>{id}</h1> */}

                {/* main video
   */}
                <iframe src={`https://www.youtube.com/embed/${id}`} className="w-full aspect-video sm:pt-6 " title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <div className="p-1">
                    <Description {...{ ...videoDetails.snippet, ...videoDetails.statistics }} />
                </div>



                <div className="pt-5 p-1 ">
                    {/* {
                        commentData.map((comment) => {
                            return <Comment key={comment.comment.index} {...comment} />
                        })
                    }  */}
                    {
                        comments ? comments?.map((comment) => {
                            return <Comments key={comment.id} {...{ ...comment.snippet, ...comment.replies }} />
                        }) : <h1>Comments are turrned off for this video</h1>
                    }

                </div>
            </div>


{/* {console.log("live",(videoDetails?.snippet?.liveBroadcastContent!=='none'))} */}

            <div className="ml-5 pt-6 ">
                {  

                    (videoDetails?.snippet?.liveBroadcastContent!=='none') ?
                <div className="mr-4 ">
                <h1 className="border-b bg-slate-300 rounded-t-xl  border-gray-400 pl-5 py-2">Live Chat</h1>
                  <div className="w-full h-96  border border-gray-400  overflow-scroll flex flex-col ">
                      
                        <LiveChatSection videoId={id} />

                    </div>
              
                    <div className="border border-gray-400 rounded-b-xl p-2
                    ">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit(e.target)
                            setUsermessage("")
                        }}
                        >
                            <input className=" w-3/4 border-b-2 text-xl border-gray-400 outline-none" placeholder=" Say something ..." value={usermessage} onChange={(e) => {
                                setUsermessage(e.target.value)

                            }}></input>
                            <button className=" m-1 p-1 text-lg bg-gray-300 rounded-xl"

                            >send🚀</button>
                        </form>
                    </div>

                </div>:null
                }



                {/* <h1>related videos </h1> */}

                {relatedVideos?.map((result, index) => {
                    return <RelatedVideoCard key={index}  {...{ ...result.id, ...result.snippet }} />
                })
                }
            </div>




        </div>
    )
}

export default Watch
