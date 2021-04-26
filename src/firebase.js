import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZldr8dbAgOrwCnp1nKbm18v-8AEhEN20",
  authDomain: "disneyplus-clone-93971.firebaseapp.com",
  projectId: "disneyplus-clone-93971",
  storageBucket: "disneyplus-clone-93971.appspot.com",
  messagingSenderId: "596641829802",
  appId: "1:596641829802:web:34be3f7709a24fec2a91d3",
  measurementId: "G-S55FEFCCJ6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
