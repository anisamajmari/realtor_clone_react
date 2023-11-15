import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxm77GwYa29o_Rh2Hv-9oCTZp9o_UcILg",
  authDomain: "realtor-clone-react-ca014.firebaseapp.com",
  projectId: "realtor-clone-react-ca014",
  storageBucket: "realtor-clone-react-ca014.appspot.com",
  messagingSenderId: "1078355206296",
  appId: "1:1078355206296:web:a46d088eea7ab0d8f570ed",
  measurementId: "G-653Z21KJP9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
