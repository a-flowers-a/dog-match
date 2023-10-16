import { createContext, useContext } from "react";
import { AuthState, AuthStateContext } from "./types";

const AuthInitialState: AuthState = {
  isAuthenticated: false,
};

const CreatedAuthContext = createContext<AuthStateContext>({
  state: AuthInitialState,
  actions: {
    setAuthState(state) {
      /** */
    },
  },
});

const AuthContext = () => useContext(CreatedAuthContext);

export { AuthInitialState, CreatedAuthContext, AuthContext };
