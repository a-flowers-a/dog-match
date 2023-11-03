import { LoaderAction, LoaderActionName, LoaderState } from "./types";

export default function LoaderReducer(
  state: LoaderState,
  action: LoaderAction
): LoaderState {
  if (action.type === LoaderActionName.SET_LOADER) {
    return {
      ...state,
      loading: action.payload,
    };
  }
  return state;
}
