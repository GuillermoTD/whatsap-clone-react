import { useEffect, useState } from "react";
import { ChatBoxStyles } from "./ChatBoxStyles";
import { getRooms } from "../../FirebaseConfig";

const ChatsBox = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async()=>{
      getRooms((querySnapshot)=>{
        querySnapshot.forEach(doc=>{
          console.log(doc.data())
        })
      })
    }
   fetchRooms()
  
  }, []);
  return (
    <ChatBoxStyles>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
      <li>Mensaje de fulanito</li>
    </ChatBoxStyles>
  );
};

export default ChatsBox;
