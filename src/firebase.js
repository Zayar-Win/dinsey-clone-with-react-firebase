import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey:
    "AIzaSyCf0CaSwj7Hb92QoqREQ_iL5FDLqI7iLA4",
  authDomain:
    "disney-clone-d809d.firebaseapp.com",
  projectId: "disney-clone-d809d",
  storageBucket: "disney-clone-d809d.appspot.com",
  messagingSenderId: "1049540340502",
  appId:
    "1:1049540340502:web:5231363f8705d44016be37",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider };
export default db;
