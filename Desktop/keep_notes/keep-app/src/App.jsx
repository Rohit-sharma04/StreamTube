import { useState } from "react"
import CreateNote from "./CreateNote"
import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import { useSelector } from "react-redux"

function App() {

  // const [addItem, setAddItem] = useState([]);
  const totalItems = useSelector((store) => store.note.noteCollection)

  // const addNote = (note) => {
  //   setAddItem((prevData) => {
  //     return [...prevData, note]
  //   })
  // }
  // const onDelete = (id) => {
  //   console.log(id, "item deleted")
  //   setAddItem((oldData) => {
  //     return oldData.filter((currdata, index) => {
  //       return index !== id;
  //     })
  //   })
  // }

  return (
    <>
      <div className="app bg-[#A1C2F1] min-h-full relative">
        <Header />

        <CreateNote
          // passNote={addNote}
        />
        <div className="noteBody  ">
        {/* flex flex-wrap  mt-10 */}
          <div className="flex flex-wrap  mt-10 " >
            {
              totalItems?.map((val, index) => {
                return <Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  // deleteItem={onDelete}
                />
              })
            }
        
          </div>
        </div>



        <Footer />
      </div>

    </>
  )
}

export default App
