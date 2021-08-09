import { useState } from "react";
import { auth } from "./firebase";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [firebaseError, setFirebaseError] = useState<string>("");

  const signup = async (email: string, password: string) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = response.user;
      console.log(user);
      setCurrentUser(user);
    } catch (error) {
      setFirebaseError(error.message);
    }
  };
  return { signup, currentUser, firebaseError };
};
