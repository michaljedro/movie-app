import { ReactElement, ReactNode } from "react";
import { User } from "firebase/auth";
import { Navigate } from "react-router";

type Props = {
  user: User | null | undefined;
  children: ReactElement;
};

export const ProtectedRoute = ({ user, children }: Props) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
