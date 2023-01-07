import React, { useEffect } from "react";
import { User } from "firebase/auth";
import {
  signInWithGoogle,
  logOut,
  logInWithEmailAndPassword,
} from "../firebase";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {
  user: User | null | undefined;
};

type Inputs = {
  email: string;
  password: string;
};
export const LoginPage = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    logInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <h1 className={styles.header}>Login</h1>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className={styles.emailInput}
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className={styles.passwordInput}
            />
            <div className={styles.btnWrapper}>
              <button type="submit" className={styles.btn}>
                Login to your account
              </button>
            </div>
          </form>
          <div className={styles.footerWrapper}>
            <p className={styles.paragraph}>
              Don't have an account?
              <a className={styles.registerLink} href="/register">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
