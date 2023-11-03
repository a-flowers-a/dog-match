export interface ErrorModalState {
  show: boolean;
  message: string;
}

export enum ErrorModalActionName {
  SET_SHOW_ERROR = "SET_SHOW_ERROR",
  SET_MESSAGE = "SET_MESSAGE",
}

export interface ErrorModalActionFunction {
  setShow: (show: boolean) => void;
  setMessage: (message: string) => void;
}

export interface ErrorModalAction {
  type: ErrorModalActionName;
  payload: boolean | string;
}

export interface ErrorModalContextState {
  state: ErrorModalState;
  actions: ErrorModalActionFunction;
}
