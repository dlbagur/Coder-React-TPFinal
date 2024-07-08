// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2OgHBU_SWdAFvcWWuwFsLbdaN7RXqiYw",
  authDomain: "tienda-vinos-tpf.firebaseapp.com",
  projectId: "tienda-vinos-tpf",
  storageBucket: "tienda-vinos-tpf.appspot.com",
  messagingSenderId: "877145678207",
  appId: "1:877145678207:web:24981d35a44f8f05b4fa4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//     .catch((error) => console.log(error));
// });
