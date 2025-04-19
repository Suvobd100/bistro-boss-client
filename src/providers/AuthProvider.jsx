import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {  // Accept children as a prop
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
//   google
  const googleProvider= new GoogleAuthProvider();


  // new user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn - fixed to use auth instance
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   google signin
  const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // signOut - fixed to use auth instance
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
  }

  
  // watcher
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}  {/* Render the children prop */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;