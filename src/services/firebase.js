
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import itemsdata from "../data/data";

const firebaseConfig = {
  apiKey: "AIzaSyB6DaJjrKzxcReB2iNBC8yqQHTC5ZM7CBY",
  authDomain: "proyecto-react-f5ae8.firebaseapp.com",
  projectId: "proyecto-react-f5ae8",
  storageBucket: "proyecto-react-f5ae8.appspot.com",
  messagingSenderId: "326139945907",
  appId: "1:326139945907:web:d44d0b57855d19de0e61c6"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;