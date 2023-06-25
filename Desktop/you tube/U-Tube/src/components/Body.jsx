import { useDispatch, useSelector } from "react-redux"
import Sidebar from "./Sidebar"
//import Maincontent from "./Maincontent"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { openMenu } from "../utils/AppSlice"


const Body = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(openMenu())
    },[])
    
    const isOpen=useSelector(store=>store.sidebar.isMenuOpen);
 
    return (
        <div className="flex">

          { isOpen?  <Sidebar />:null}

            <Outlet />

            {/* <Maincontent /> */}
        </div>
    )
}

export default Body
