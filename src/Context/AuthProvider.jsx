import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // Loading state
  const [loading, setLoading] = useState(true);

  // stored login user
  const [user, setUser] = useState();

  //Create a new user's using email address and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //updateUserProfile
  const updateUserProfile = (userDetails) => {
    setLoading(true);
    console.log("server");
    return updateProfile(auth.currentUser, userDetails);
  };

  // sign in user
  const logIN = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //facebook login
  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // Get current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // forget password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // email verification
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // create a object for sharing function and data from one place
  const authInfo = {
    createNewUser,
    user,
    logOut,
    logIN,
    setLoading,
    googleLogIn,
    facebookLogin,
    updateUserProfile,
    forgetPassword,
    emailVerification
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
