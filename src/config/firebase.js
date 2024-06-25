import { initializeApp } from "firebase/app";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBBuIlA914bnyodjRfhHomnv8lK4ye74jY",
    authDomain: "coder-react-tp2.firebaseapp.com",
    projectId: "coder-react-tp2",
    storageBucket: "coder-react-tp2.appspot.com",
    messagingSenderId: "964763874697",
    appId: "1:964763874697:web:fcfb5e3f41c998e7901d58",
    measurementId: "G-F4XHX03WL4"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  productos.forEach(prod) => {
    addDoc(collection(db, "productos"), prod)
    .then
    .catch
  }
