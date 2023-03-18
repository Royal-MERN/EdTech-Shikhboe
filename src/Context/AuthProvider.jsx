import React, { createContext, useContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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

  // create a object for sharing function and data from one place
  const authInfo = {createNewUser,};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
