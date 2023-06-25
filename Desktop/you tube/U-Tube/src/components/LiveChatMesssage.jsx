
const LiveChatMesssage = ({ name, message, img, channelId }) => {
    return (

        <div className="m-2 flex">
            {console.log("live messages")}
            <div className="m-2">
                <img className="rounded-full w-8 " src={img} alt="img" />
            </div>
            <div>
                <h1 className="font-semibold">{name}</h1>
                <h1 className="">{message}</h1>
            </div>

        </div>
    )
}

export default LiveChatMesssage
