import { Link } from "react-router-dom"
import Replies from "./Replies"

const Comments = ({ topLevelComment, totalReplyCount, comments }) => {
  const { authorChannelId, authorChannelUrl, authorDisplayName, authorProfileImageUrl, textOriginal, likeCount, publishedAt } = topLevelComment.snippet

  return (
    <>
      <div className='flex  '>

        <Link to={`/channel/${authorChannelId.value}`} >
          {/* <div> */}
          <img alt='profilePic' src={authorProfileImageUrl} className='rounded-full mx-2  w-10 ' />
          {/* </div> */}
        </Link>
        <div className="ml-4 max-w-max">
          <Link to={`/channel/${authorChannelId.value}`}>
            <h1 className='text-sm  mlfont-semibold'>{authorDisplayName}</h1>
          </Link>
          <h1 className='text-sm  whitespace-pre-wrap'>{textOriginal}</h1>
        </div>
      </div>
      <h1 className="mx-3 pl-20">{likeCount} 👍🏼👎🏼</h1>

      {totalReplyCount ? comments.map((reply) => <Replies key={reply.id} {...reply.snippet} />) : null}
    </>
  )

}

export default Comments
