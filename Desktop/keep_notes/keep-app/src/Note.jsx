import { useDispatch } from "react-redux";
import { removeItem } from "./utils/noteSlice";

const Note = (props) => {
    const dispatch=useDispatch()
    // console.log(props)
    const deleteNote = () => {
        dispatch(removeItem(props.id))
        // props.deleteItem(props.id);
    }

    return (
        <div className="mx-auto my-4 bg-[#E7CEA6] rounded-md shadow-md relative pb-10 w-80 hover:scale-125 hover:z-50 ">
            <h1 className="font-semibold bg-[#0A6EBD] p-3 text-white w-full break-all">{props.title}</h1>
            <p className=" break-all p-3">{props.content}</p>
            <div className="">
            <button className='rounded-full bg-red-300 p-1 mx-2 absolute bottom-0 px-2 mb-2' onClick={deleteNote}>Delete</button>
            </div>
            
        </div>
    )
}

export default Note
