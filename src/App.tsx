import { Route, Routes } from "react-router-dom";
//Components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/atoms/ProtectedRoute";
import Loader from "./components/molecules/Loader";
//Context
import { AuthContext } from "./context/AuthProvider/context";
import { LoaderContext } from "./context/AuthProvider/LoaderProvider/context";
//Types & Constants
import { RoutePath } from "./constants/routes";

function App() {
  const {
    state: { isAuthenticated },
  } = AuthContext();
  const {
    state: { loading },
  } = LoaderContext();
  return (
    <>
      <Loader show={loading} />
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
