import React from "react";
import { signInWithGoogle, logOut, auth } from "../firebase";
import styles from "./LoginPage.module.css";
type Props = {};

export const LoginPage = (props: Props) => {
  console.log(auth);
  return (
    <div>
      <button onClick={signInWithGoogle}>Login with Google</button>
      <button onClick={logOut}>logout</button>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div>
              <h1 className={styles.header}>Login</h1>
            </div>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.emailInput}
              />

              <input
                type="password"
                placeholder="Password"
                className={styles.passwordInput}
              />
            </form>
            <div>
              <button type="submit" className={styles.btn}>
                Create an account
              </button>
            </div>
            <div>
              <p className={styles.paragraph}>
                Alread have an account ?
                <button className={styles.btnLogin}>Login</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
