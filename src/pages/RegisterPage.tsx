import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createUser } from "../firebase";

type Inputs = {
  email: string;
  password: string;
};

type Props = {};

export const RegisterPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    createUser(data.email, data.password);
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input type="email" {...register("email")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <button type="submit">Prześlij</button>
      </form>
    </div>
  );
};
