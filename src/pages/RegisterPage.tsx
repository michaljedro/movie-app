import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUser } from "../firebase";
import styles from "./RegisterPage.module.css";
type Inputs = {
  email: string;
  password: string;
};

type Props = {};

export const RegisterPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    createUser(data.email, data.password);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <h1 className={styles.header}>Sign up</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="email"
              {...register("email")}
              placeholder="Email address"
              className={styles.emailInput}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className={styles.passwordInput}
            />
            <input
              type="password"
              placeholder="Repeat password"
              className={styles.repeatPasswordInput}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
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
  );
};
