import { useEffect, useState } from "react";
import { ChatBoxStyles } from "./ChatBoxStyles";
import { DataBase } from "../../FirebaseConfig";
import { collection } from "firebase/firestore";
import { fetchRooms } from "../../FirebaseConfig";
const ChatsBox = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(fetchRooms());
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
