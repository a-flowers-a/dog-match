import { AuthAction, AuthActionName, AuthState } from "./types";

export default function AuthReducer(state: AuthState, action: AuthAction) {
  if (action.type === AuthActionName.SET_AUTH_STATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
}
