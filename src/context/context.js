import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

export const authContext = React.createContext();

export function useAuth() {
  return useContext(authContext);
}

const Context = ({ children }) => {
  const [curuser, setcuruser] = useState();
  const [loading, setloading] = useState(false);

  function signup(email, pwd) {
    return auth.createUserWithEmailAndPassword(email, pwd);
  }

  function login(email, pwd) {
    return auth.signInWithEmailAndPassword(email, pwd)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setcuruser(user);
      setloading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    curuser,
    signup,
    login,
    logout
  };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};

export default Context;
