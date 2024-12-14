"use client";

import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const AuthButton = () => {
  const { user, loading } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Error during sign-in", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  if (loading) {
    return <div> </div>;
  }

  return (
    <div>
      {user ? (
        <button
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <button
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={signInWithGoogle}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
