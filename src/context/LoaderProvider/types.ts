export interface LoaderState {
  loading: boolean;
}

export enum LoaderActionName {
  SET_LOADER = "SET_LOADER",
}

export interface LoaderActionFunction {
  setLoader: (loading: boolean) => void;
}

export interface LoaderAction {
  type: LoaderActionName;
  payload: boolean;
}

export interface LoaderContextState {
  state: LoaderState;
  actions: LoaderActionFunction;
}
