import { useCallback, useReducer } from "react";
//Context
import { AuthInitialState, CreatedAuthContext } from "./context";
import AuthReducer from "./reducer";
import { AuthActionName, AuthState } from "./types";

function AuthProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  /**
   * Sets the authState props
   */
  const setAuthState = useCallback((state: AuthState) => {
    dispatch({ type: AuthActionName.SET_AUTH_STATE, payload: state });
  }, []);

  const providerValue = {
    state: state,
    actions: {
      setAuthState,
    },
  };
  return (
    <CreatedAuthContext.Provider value={providerValue}>
      {children}
    </CreatedAuthContext.Provider>
  );
}

export default AuthProvider;
