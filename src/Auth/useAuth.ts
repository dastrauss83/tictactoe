import { auth } from "./firebase";

export const useAuth = () => {
  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  return { signup };
};
