import { User } from "firebase/auth";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { createUser } from "../firebase";
import styles from "./RegisterPage.module.css";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  user: User | null | undefined;
};

export const RegisterPage = ({ user }: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createUser(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
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
              className={styles.passwordInput}
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <input
              placeholder="Repeat password"
              className={styles.repeatPasswordInput}
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            {/* errors will return when field validation fails  */}
            <div className={styles.btnWrapper}>
              <button type="submit" className={styles.btn}>
                Create an account
              </button>
            </div>
          </form>
          <div>
            <p className={styles.paragraph}>
              Alread have an account ?
              <a href="/login" className={styles.btnLogin}>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
