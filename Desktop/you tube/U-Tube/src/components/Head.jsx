import { useDispatch, useSelector } from "react-redux"
import ham from "../image/Hamburger_icon.png"
import tube from "../image/logo.png"
import Profile from '../image/Profile-image.png'
import smallLogo from  '../image/smallLogo.png'
import { toggleMenu } from "../utils/AppSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { addSuggestionCache } from "../utils/suggestionSlice";

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggestionList, setSuggestionList] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleMenu())
    }

    const getSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        console.log("jsonData", json[1])

        setSuggestionList(json[1])
        // const query=searchQuery
        dispatch(addSuggestionCache({ [searchQuery]: suggestionList }))
    }

    const cacheSuggestion = useSelector((store) => store.suggestion.suggestionCache)

    useEffect(() => {
        if (cacheSuggestion[searchQuery]) {
            setSuggestionList(cacheSuggestion[searchQuery])
        }
        else {
            const timerId = setTimeout(() => {
                console.log("API", searchQuery)
                getSuggestion()

            }, 200)

            return () => {
                clearTimeout(timerId)
            }
        }

    }, [searchQuery])

    const navigate = useNavigate();

    return (
        //shadow-lg  min-w-full grid  grid-flow-col bg-white  sticky top-0 border border-red-800
        <div className="flex justify-between   py-3 shadow-lg  sticky top-0 bg-white z-30" >
            {/* //flex col-span-1 */}
            <div className="flex items-center">
                {/* h-7 m-2 cursor-pointer */}
                <img className="mx-2" alt="hamberger" onClick={() => handleClick()} src={ham} />
                <Link to="/">           {/*   h-6 m-2 */}
                    {/* <img alt="logo" className="h-4 " src={tube} /> */}
                    <img
                        className="hidden  w-28 sm:block sm:w-40"
                        src={tube}
                        alt="Large logo"
                    />
                    <img
                        className="w-11   sm:hidden "
                        src={smallLogo}
                        alt="small logo "
                    />
                </Link>
            </div>
            {/* col-span-10 relative   col-span-1 */}
            <div className="relative w-1/2">

                <form onSubmit={(e) => {
                    e.preventDefault()
                    navigate(`/result/${searchQuery}`)
                    // setSearchQuery("")
                    setShowSuggestions(false)
                }} className="flex relative">
                    {/* <div className="flex">                                        border border-gray-500 h-8  rounded-l-xl     w-28 p-2  flex-shrink */}
                    <input type="search" placeholder="Search" className=" border border-gray-500 rounded-l-2xl p-1 w-4/5" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }}
                        onBlur={() => setShowSuggestions(false)}
                        onFocus={() => setShowSuggestions(true)}

                    />
                    {/* rounded-r-xl border border-gray-500 h-8  w-14 bg-slate-300 */}
                    <button className="rounded-r-2xl border w-fit border-gray-500  bg-slate-300 p-1 pr-3">search</button>

                </form>
                {/* </div> */}
                {/* absolute   bg-white   w-96   rounded-2xl shadow-2xl py-3  */}
                <div className="">
                    {showSuggestions && <ul className=" absolute bg-white rounded-2xl shadow-2xl py-3 sm:w-4/5 w-2/3 ">
                        {suggestionList.map((item) => {
                            {/* p-1 hover:bg-gray-200 */ }
                            return <li className=" p-1 hover:bg-gray-200 "
                                onMouseDown={() => setSearchQuery(item)}
                                key={item} >{item}</li>
                        })
                        }
                    </ul>
                    }
                </div>

            </div>
            {/* h-8  col-span-1 */}
            <img className="h-8 mr-2 sm:h-11 sm:mr-5" alt="profile pic" src={Profile} />
        </div>
    )
}

export default Head
