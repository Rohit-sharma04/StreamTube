import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './utils/noteSlice'

const CreateNote = () => {

   const [Expand,setExpand]=useState(false)
   const dispatch =useDispatch()

    const [Note, setNote] = useState({
        title: "",
        content: "",
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        dispatch(addItem(Note))
        // passNote(Note)
        setNote({
            title:"",
            content:""
        })
    }

    const expandIt=()=>{
        setExpand(true)
    }
    const backToNormal=()=>{
        setExpand(false)
    }

    return (
      
            <div className='w-4/5  sm:w-1/2 m-auto ' onDoubleClick={backToNormal}>
                <form className='flex flex-col  ' onSubmit={(e) => {
                    e.preventDefault() }}>
                    {Expand?
                    <input className='px-2 py-3' type='text' name='title' value={Note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />:null}
                    <textarea className='px-2' rows="" name='content' value={Note.content} onChange={inputEvent} placeholder='write content' onClick={expandIt}>
                    </textarea>
                    <div className='text-center'>
                     {
                        Expand?<button className='rounded-full bg-green-200 w-16 h-8 m-2 sticky top-20 ' 
                        onClick={addEvent}>Add</button>:null
                    } 
                    </div>
                   

                </form>
            </div>

      
    )
}

export default CreateNote
