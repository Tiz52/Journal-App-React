import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase-config"

export const loadNotes = async ( uid ) => {

    const col = collection(db, `${uid}/journal/notes`);

   const noteSnap = await getDocs(col);
   const notes = [];

   noteSnap.forEach( snapChild => {
       notes.push({
           id: snapChild.id,
           ...snapChild.data()
       })
   })
   
   return notes;

}