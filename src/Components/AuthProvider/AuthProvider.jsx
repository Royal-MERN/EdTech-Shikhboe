import React, { createContext, useEffect, useState } from 'react';

import{createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  sendPasswordResetEmail}from 'firebase/auth'
import app from './../Global/firebace/firebase.config';

export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    const FacebookSignIn = (facebook) => {
		return signInWithPopup(auth, facebook);
	};

	const GoogleSignIn = (google) => {
		return signInWithPopup(auth, google);
	};
    const createAccount = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const changePass = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	const updateUserProfile = (info) => {
		return updateProfile(auth.currentUser, info);
	};
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          //   console.log("user Observing");
       
          setUser(currentUser);
          setLoading(false)
        });
    
        return () => unsubscribe();
      }, []);

	





    const authInfo = {
		auth,
		user,
		loading,
		FacebookSignIn,
		GoogleSignIn,
	
		createAccount,
		login,
	
		logOut,
		changePass,
		updateUserProfile,
		
	};
    return (
       <AuthContext.Provider
       
      value={authInfo}
       >


{ children}


       </AuthContext.Provider>
    );
};

export default AuthProvider;