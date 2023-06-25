export const API_KEY='AIzaSyD7t2qOMaZnp2Y0KW1JL25a4d8w2y7iNCU'

export const YOUTUBE_API_DATA="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key="+API_KEY

// export const YOUTUBE_API_DATA="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyBlMMgtV52wVqpiK-eUadhh5N3pJFVEdlE"

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_RELATED_VIDEO_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='Ks-_Mh1QhMc&type=video&key="+API_KEY


export const YOUTUBE_SEARCH_RESULT_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=[Query]&key=`+API_KEY

export const YOUTUBE_VIDEO_DETAIL_BY_ID='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key='+API_KEY

export const YOUTUBE_COMMENTS='https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=[_VB39Jo8mAQ]&key='+API_KEY



export const  GET_LIVECHAT_TD_BY_VIDEO_ID="https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,liveStreamingDetails&id=" + "videoId" + "&key="+API_KEY


export const GET_LIVE_CHAT_BY_LIVE_CHAT_ID='https://youtube.googleapis.com/youtube/v3/liveChat/messages?liveChatId=' + 'liveChatId' + '&part=snippet%2CauthorDetails&key='+API_KEY