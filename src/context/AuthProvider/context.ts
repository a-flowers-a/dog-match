import { createContext, useContext } from "react";
//Helpers
import { getStorageItem } from "../../helpers/storage";
//Types
import { AuthState, AuthStateContext } from "./types";
import { StorageKey } from "../../types/storage";

const AuthInitialState: AuthState = {
  isAuthenticated: !!getStorageItem(StorageKey.Session),
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
