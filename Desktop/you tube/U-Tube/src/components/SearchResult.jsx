
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../utils/constant'
import SearchResultCard from './SearchResultCard'
import SearchShimmer from '../Shimmers/SearchShimmer'
const SearchResult = () => {

    const { searchQuery } = useParams()

    const [results, setResults] = useState([])

    const getResult = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=`+API_KEY)
        const json = await data.json();
        setResults(json.items)
        console.log("search result", json.items)
    }
    useEffect(() => {
        getResult()
    }, [searchQuery])
    
    return (
        <div className='mx-3 '>
            {/* <h1>SearchResult</h1> */}
      
            {/* <SearchResultCard/> */}
            {  !results ?<SearchShimmer/>:
                results.map((result, index) => {
                return <SearchResultCard key={index}  {...{ ...result.id, ...result.snippet }} />
            })
            }
        </div>
    )
}


// const HigherOrderComponent = (SearchResult) => {
//     function NewComponent(props) {

//       return (
//         <div>
//             <SearchResult  {...results[0]}/>
//             <div>

//             </div>
//         </div>

//       );
//     }
// }
export default SearchResult
