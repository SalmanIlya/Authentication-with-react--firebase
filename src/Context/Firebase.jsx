import { initializeApp } from "firebase/app";
import React, { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const FirebaseContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyD35C1asLmmI_QhQeDYGrwealxXhQu-M9M",
  authDomain: "react-with-firebase-78405.firebaseapp.com",
  projectId: "react-with-firebase-78405",
  storageBucket: "react-with-firebase-78405.appspot.com",
  messagingSenderId: "188572726860",
  appId: "1:188572726860:web:24387647a18d12da8066e9",
  measurementId: "G-9GHJ57GQNX",
  databaseURL: "https://react-with-firebase-78405.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const Usefirebase = () => useContext(FirebaseContext);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider()
export const FirebaseProvider = (props) => {
  const signupuser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("error");
      });
  };
  const Loginuser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {})
      .catch(() => {
        alert("email or Password is inCorrect");
      });
  };
  const [User, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const logoutuser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(() => {
        console.log("error");
      });
  };
  const isLogin = User ? true : false;
  // const navigate=useNavigate()
const LoginWithGoogle=()=>{
  signInWithPopup(auth,googleProvider)
}
  return (
    <FirebaseContext.Provider
      value={{ Loginuser, signupuser, User, logoutuser, isLogin,LoginWithGoogle }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
// Initialize Firebase
