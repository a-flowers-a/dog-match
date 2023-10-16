import { Navigate } from "react-router-dom";
//Types & consts
import { RoutePath } from "../../../constants/routes";
import { ProtectedRouteProps } from "./types";

function ProtectedRoute({ children, isAuth }: ProtectedRouteProps) {
  if (!isAuth) {
    return <Navigate to={RoutePath.SignIn} replace />;
  }
  return children;
}

export default ProtectedRoute;
