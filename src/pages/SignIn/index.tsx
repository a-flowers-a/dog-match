import { useNavigate } from "react-router-dom";
//COmponents
import { useCallback } from "react";
import LoginCard from "../../components/molecules/LoginCard";
import { LoginData } from "../../types/authentication";
//Context
import { AuthContext } from "../../context/AuthProvider/context";
//Services
import { login } from "../../services/authentication";
//Types & Consts
import { RoutePath } from "../../constants/routes";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function SignIn() {
  //Context
  const {
    actions: { setAuthState },
  } = AuthContext();

  const navigate = useNavigate();

  /**
   * Calls service to perform login and moves to the Home page
   */
  const handleLogin = useCallback(
    async (loginData: LoginData) => {
      try {
        await login(loginData);
        setAuthState({ isAuthenticated: true });
        navigate(RoutePath.Home);
      } catch (error) {
        console.log("error at handleLogin", error);
      }
    },
    [navigate, setAuthState]
  );

  return (
    <div className="base-page sign-in-container">
      <LoginCard handleSubmit={handleLogin} />
    </div>
  );
}

export default SignIn;
