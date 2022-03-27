import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
   const [notesArray, setNotesArray] = useState([...notes]);

   function addNote(noteData) {
      setNotesArray((prevValue) => {
         return [...prevValue, noteData];
      });
   }

   function deleteNote(NoteId) {
      setNotesArray(() => {
         return notesArray.filter((e, index) => {
            return index !== NoteId;
         });
      });
   }

   return (
      <div>
         <Header />
         <CreateArea addNewNote={addNote} />
         {notesArray.map((e, index) => {
            return (
               <Note
                  key={index}
                  id={index}
                  title={e.title}
                  content={e.content}
                  onDelete={deleteNote}
               />
            );
         })}
         <Footer />
      </div>
   );
}

export default App;
