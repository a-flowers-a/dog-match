//COmponents
import { useCallback } from "react";
import LoginCard from "../../components/molecules/LoginCard";
import { LoginData } from "../../types/authentication";
//Services
import { login } from "../../services/authentication";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function SignIn() {
  /**
   * Calls service to perform login and moves to the Home page
   */
  const handleLogin = useCallback(async (loginData: LoginData) => {
    try {
      await login(loginData);
      console.log("successful login");
    } catch (error) {
      console.log("error at handleLogin", error);
    }
  }, []);

  return (
    <div className="base-page sign-in-container">
      <LoginCard handleSubmit={handleLogin} />
    </div>
  );
}

export default SignIn;
