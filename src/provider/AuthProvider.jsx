import AuthContext from '@/context/AuthContext';
import  {  useState,useEffect,createContext } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { FaUserAlt } from "react-icons/fa";
import app  from "./../firebase/firebase.config"
// import app from "@/firebase/firebase.config";
// import app from "/firebase/firebase.config"
// import app from "@/firebase/firebase.config";

const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [spinner, setSpinner] = useState(true);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [error, setError] = useState("");

    //   user create
    const registration = (email, password) => {
      setSpinner(true);

      return createUserWithEmailAndPassword(auth, email, password);
    };

    //   user login  function
    const login = (email, password) => {
      setSpinner(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    //   user login  by google

    const googleLogin = () => {
      setSpinner(true);
      return signInWithPopup(auth, googleProvider);
    };

    //  user logOut
    const loggedOut = () => {
      setSpinner(true);
      signOut(auth);
    };
    // user data update
    const userUpdating = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
    // user observe
 
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log("user login  ", currentUser);
          
      });
      return () => {
        unSubscribe();
      };
    }, []);

    const authInfo = {
      user,
      registration,
      login,
      loggedOut,
      googleLogin,
      setSpinner,
      spinner,
      photoUrl,
      userUpdating,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;