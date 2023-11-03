import {
  ErrorModalAction,
  ErrorModalActionName,
  ErrorModalState,
} from "./types";

export default function ErrorModalReducer(
  state: ErrorModalState,
  action: ErrorModalAction
): ErrorModalState {
  if (action.type === ErrorModalActionName.SET_SHOW_ERROR) {
    return {
      ...state,
      show: action.payload as boolean,
    };
  } else if (action.type === ErrorModalActionName.SET_MESSAGE) {
    return {
      ...state,
      message: action.payload as string,
    };
  }
  return state;
}
