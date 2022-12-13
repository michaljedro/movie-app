import React from "react";
import { signInWithGoogle, logOut, auth } from "../firebase";
type Props = {};

export const LoginPage = (props: Props) => {
  console.log(auth);
  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={signInWithGoogle}>Login with Google</button>
      <button onClick={logOut}>logout</button>
    </div>
  );
};
