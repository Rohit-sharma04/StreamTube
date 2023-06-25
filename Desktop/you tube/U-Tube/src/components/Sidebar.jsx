
const Sidebar = () => {
  return (
    <div className="z-50">
     <ul className="ml-2 shadow-lg   w-80 h-full  fixed  bg-white  overflow-scroll text-lg font-semibold ">
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Home </li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Shorts </li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Subscribe </li>

        <hr className="my-2 w-4/5 mx-auto h-0.5 bg-gray-300"/>

        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Live </li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Code </li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Movies</li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Music</li>
        <hr className="my-2 w-4/5 mx-auto h-0.5 bg-gray-300"/>

        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Gaming</li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">News</li>     
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Sports </li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Fashion & Beauty</li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Cooking</li>
        <hr className="my-2 w-4/5 mx-auto h-0.5 bg-gray-300"/>

        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Tending</li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Suprprise Me</li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Favourite</li>
        
        <hr className="my-2 w-4/5 mx-auto h-0.5 bg-gray-300"/>

        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">History</li>
        <li className="py-1 px-3 hover:bg-gray-200 hover:cursor-pointer">Settings</li>
       
     </ul>
    </div>
  )
}

export default Sidebar
