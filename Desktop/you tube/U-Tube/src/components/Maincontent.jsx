import { useEffect, useState } from "react"
import Button from "./ButtonList"
import VideoContent from "./VideoContent"
import { YOUTUBE_API_DATA } from "../utils/constant"
import HomeShimmer from "../Shimmers/HomeShimmer"
const Maincontent = () => {

 const [items,setItems]=useState([])

    const featch= async()=>{
        const data= await fetch(YOUTUBE_API_DATA)
         const json=await data.json()
         console.log("json video card",json)
        // console.log(json.items)
        setItems(json.items)
    }
    useEffect(()=>{
        featch()
    },[])
  return (
    <div  className=" shadow-lg p-3  w-full  ">
   
      <Button/>

    
      <div className="flex flex-wrap justify-center">{
      (!items.length) ? <HomeShimmer/>
      : 
      items.map((item)=>{
          return  <VideoContent key={item.id}  {...item} />
        })
      }
      </div> 
      
    </div>
  )
}

export default Maincontent
