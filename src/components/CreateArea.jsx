import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
   const [isExpanded, setIsExpanded] = useState(false);
   const [noteData, setNoteData] = useState({ title: "", content: "" });

   function handleChange(event) {
      const { name, value } = event.target;

      setNoteData((prevValue) => {
         return {
            ...prevValue,
            [name]: value,
         };
      });
   }

   return (
      <div>
         <form
            className="create-note"
            onSubmit={(event) => {
               event.preventDefault();
               props.addNewNote(noteData);
               setNoteData({ title: "", content: "" });
               setIsExpanded(false);
            }}
         >
            {isExpanded && (
               <input
                  onChange={handleChange}
                  name="title"
                  placeholder="Title"
                  value={noteData.title}
                  autoComplete="off"
               />
            )}
            <textarea
               onChange={handleChange}
               name="content"
               placeholder="Take a note..."
               value={noteData.content}
               rows={isExpanded ? "3" : "1"}
               onClick={() => setIsExpanded(true)}
            />
            <Zoom in={isExpanded}>
               <Fab type="submit">
                  <AddIcon />
               </Fab>
            </Zoom>
         </form>
      </div>
   );
}

export default CreateArea;
