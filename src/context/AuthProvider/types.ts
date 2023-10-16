export interface AuthState {
  isAuthenticated: boolean;
}

export enum AuthActionName {
  SET_AUTH_STATE = "SET_AUTH_STATE",
}

export interface AuthActionFunction {
  setAuthState: (state: AuthState) => void;
}

export interface AuthStateContext {
  state: AuthState;
  actions: AuthActionFunction;
}

export interface AuthAction {
  type: AuthActionName;
  payload: AuthState;
}
