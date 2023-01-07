import { auth } from "../firebase";

export const useAuthUser = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  });
};
