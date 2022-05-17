// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  doc
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeaQd-Zoc3WOhi4qAaLvyWH_okxAFznWo",
  authDomain: "whatsapp-react-clone-962be.firebaseapp.com",
  projectId: "whatsapp-react-clone-962be",
  storageBucket: "whatsapp-react-clone-962be.appspot.com",
  messagingSenderId: "816154500918",
  appId: "1:816154500918:web:d5fbd1c1690ca428d49d97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DataBase = getFirestore(app);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();

const consulta = query(collection(DataBase, "Rooms"));

const fetchRooms = onSnapshot(collection(DataBase, "Rooms"), (snapshot) => {
  const result = snapshot.docs.map((doc) => doc.data());
  console.log("ESTO PARECE FUNCIONAR");
  return result;
});

export { DataBase, Auth, Provider, fetchRooms };
