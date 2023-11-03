import { Route, Routes } from "react-router-dom";
//Components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/atoms/ProtectedRoute";
import Loader from "./components/molecules/Loader";
import MessageModal from "./components/molecules/MessageModal";
//Context
import { AuthContext } from "./context/AuthProvider/context";
import { LoaderContext } from "./context/LoaderProvider/context";
import { ErrorModalContext } from "./context/ErrorModal/context";
//Types & Constants
import { RoutePath } from "./constants/routes";
import { ErrorTitle } from "./constants/messages";

function App() {
  const {
    state: { isAuthenticated },
  } = AuthContext();
  const {
    state: { loading },
  } = LoaderContext();
  const {
    state: { show, message },
    actions: { setShow },
  } = ErrorModalContext();

  return (
    <>
      <Loader show={loading} />
      {show && (
        <MessageModal
          message={message}
          title={ErrorTitle.Ups}
          handleClick={() => setShow(false)}
        />
      )}
      <Routes>
        <Route path={RoutePath.SignIn} element={<SignIn />} />
        <Route
          path={RoutePath.Home}
          element={
            <ProtectedRoute isAuth={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
