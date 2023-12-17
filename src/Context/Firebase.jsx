import { initializeApp } from "firebase/app";
import React, { useContext, createContext, useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
export const firestore = getFirestore(app);
const Storage = getStorage(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export const FirebaseProvider = (props) => {
  const signupuser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
     
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

  const LoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  const downloadimg = (path) => {
    return getDownloadURL(ref(Storage, path));
  };
  const CreateBlogspage = async (title, description, img) => {
    const imageupload = ref(Storage, `upload/images/${Date.now()}-${img.name}`);
    const uploadimg = await uploadBytes(imageupload, img);
  
    return await addDoc(collection(firestore, "Addblogs"), {
      title: title,
      description: description,
      img: uploadimg.ref.fullPath,
      userID: User.uid,
      userEmail: User.email,
      Username: User.displayName,
      userimage: User.photoURL,
      date: Date(),
    });
  };
  const getAllBlogs = () => {
    return getDocs(collection(firestore, "Addblogs"));
  };
  const getsingleblog = async (id) => {
    return await getDoc(doc(firestore, "Addblogs", id));
  };
  return (
    <FirebaseContext.Provider
      value={{
        Loginuser,
        signupuser,
        User,
        logoutuser,
        isLogin,
        LoginWithGoogle,
        CreateBlogspage,
        getAllBlogs,
        downloadimg,
        getsingleblog,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

