import { createContext, useContext } from "react";
import { ErrorModalContextState, ErrorModalState } from "./types";

const ErrorModalInitialState: ErrorModalState = {
  show: false,
  message: "",
};

const CreatedErrorModalContext = createContext<ErrorModalContextState>({
  state: ErrorModalInitialState,
  actions: {
    setShow(show) {
      /** */
    },
    setMessage(message) {
      /** */
    },
  },
});

const ErrorModalContext = () => useContext(CreatedErrorModalContext);

export { ErrorModalInitialState, CreatedErrorModalContext, ErrorModalContext };
