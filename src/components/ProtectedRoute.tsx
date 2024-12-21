import { ReactNode } from "react";
import { Navigate } from "react-router";

interface IProps {
  token: boolean;
  page: ReactNode;
  link: string;
}
export default function ProtectedRoute({ token, page, link }: IProps) {
  return token ? page : <Navigate to={link} />;
}
