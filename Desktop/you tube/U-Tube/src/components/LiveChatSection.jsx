import { useState, useEffect } from 'react'
import LiveChatMesssage from './LiveChatMesssage'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from '../utils/LiveChatSlice'

import { API_KEY } from '../utils/constant'

const LiveChatSection = ({ videoId }) => {

    const [liveChatId, setLiveChatid] = useState("")
    const [liveChatMessages, setliveChatmessages] = useState([])
    const dispatch = useDispatch()

    const ChatMesssage = useSelector((store) => store.liveChat.message)

    const getLiveChatid = async () => {
        const data = await fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,liveStreamingDetails&id=' + videoId + '&key=' + API_KEY)
        const json = await data.json()
        console.log("liveChatid", json)
        console.log("liveChatid", json?.items[0]?.liveStreamingDetails?.activeLiveChatId
        )
        setLiveChatid(json?.items[0]?.liveStreamingDetails?.activeLiveChatId)
    }


    const getLiveChat = async () => {
        const data = await fetch('https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=' + liveChatId + '&part=snippet%2CauthorDetails&key=' + API_KEY)
        const json = await data.json()
        console.log("live chat", json.items)
        setliveChatmessages(json.items)

        json?.items?.map((item)=>{

            dispatch(addmessage(
                {
                    name: item.authorDetails.displayName,
                    img:item.authorDetails.profileImageUrl,
                    channelId:item.authorDetails.channelId,
                    message: item.snippet.displayMessage
                }
            )
            )
        })
    }

    useEffect(() => {
        getLiveChatid()
        let id;
        if(liveChatId){
             id = setInterval(() => {
                getLiveChat()
               
            },3000)
        }
        

        return () => clearInterval(id);
    }, [videoId])

    // useEffect(() => {
        // getLiveChatid()
        // if(liveChatId){
        // getLiveChat()
        // }


    // }, [videoId])

    return (
        <div>
            {
                ChatMesssage.map((message, index) => {
                    return <LiveChatMesssage key={index} {...message} />
                })
            }

        </div>
    )
}

export default LiveChatSection
