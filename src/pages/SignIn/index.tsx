import { useNavigate } from "react-router-dom";
//COmponents
import { useCallback } from "react";
import LoginCard from "../../components/molecules/LoginCard";
import { LoginData } from "../../types/authentication";
//Context
import { AuthContext } from "../../context/AuthProvider/context";
import { LoaderContext } from "../../context/LoaderProvider/context";
import { ErrorModalContext } from "../../context/ErrorModal/context";
//Services
import { login } from "../../services/authentication";
//Types & Consts
import { RoutePath } from "../../constants/routes";
import { ErrorMessage } from "../../constants/messages";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function SignIn() {
  //Context
  const {
    actions: { setLoader },
  } = LoaderContext();
  const {
    actions: { setAuthState },
  } = AuthContext();
  const {
    actions: { setShow, setMessage },
  } = ErrorModalContext();

  const navigate = useNavigate();

  /**
   * Calls service to perform login and moves to the Home page
   */
  const handleLogin = useCallback(
    async (loginData: LoginData) => {
      try {
        setLoader(true);
        await login(loginData);
        setAuthState({ isAuthenticated: true });
        setLoader(false);
        navigate(RoutePath.Home);
      } catch (error: any) {
        setLoader(false);
        setMessage(error?.message || ErrorMessage.Login);
        setShow(true);
      }
    },
    [navigate, setAuthState, setLoader, setMessage, setShow]
  );

  return (
    <div className="base-page sign-in-container">
      <LoginCard handleSubmit={handleLogin} />
    </div>
  );
}

export default SignIn;
