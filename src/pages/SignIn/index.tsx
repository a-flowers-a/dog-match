import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
//COmponents
import { useCallback, useEffect } from "react";
import LoginCard from "../../components/molecules/LoginCard";
import { LoginData } from "../../types/authentication";
//Context
import { AuthContext } from "../../context/AuthProvider/context";
import { LoaderContext } from "../../context/LoaderProvider/context";
import { ErrorModalContext } from "../../context/ErrorModal/context";
//Services & helpers
import { login } from "../../services/authentication";
import { setStorageItem } from "../../helpers/storage";
//Types & Consts
import { SessionStorageItem, StorageKey } from "../../types/storage";
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
    state: { isAuthenticated },
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
        const sessionStItem: SessionStorageItem = {
          key: StorageKey.Session,
          value: true,
        };
        setStorageItem(sessionStItem);
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

  //Handle navigation if logged
  useEffect(() => {
    if (isAuthenticated) {
      navigate(RoutePath.Home);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="base-page sign-in-container">
      <LoginCard handleSubmit={handleLogin} />
      <div className="sign-in-container__note">
        <FontAwesomeIcon
          className="sign-in-container__info-icon"
          icon={faCircleInfo}
        />
        <p>You don't need to SignUp or even use real credentials</p>
      </div>
    </div>
  );
}

export default SignIn;
