import { useCallback, useReducer } from "react";
import { CreatedErrorModalContext, ErrorModalInitialState } from "./context";
import ErrorModalReducer from "./reducer";
import { ErrorModalActionName } from "./types";

function ErrorModalProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(
    ErrorModalReducer,
    ErrorModalInitialState
  );

  /**
   * Calls to dispatch to set display modal
   */
  const setShow = useCallback((show: boolean) => {
    dispatch({
      type: ErrorModalActionName.SET_SHOW_ERROR,
      payload: show,
    });
  }, []);

  /**
   * Calls to dispatch to set the modal message
   */
  const setMessage = useCallback((message: string) => {
    dispatch({
      type: ErrorModalActionName.SET_MESSAGE,
      payload: message,
    });
  }, []);

  const contextValue = {
    state,
    actions: { setShow, setMessage },
  };

  return (
    <CreatedErrorModalContext.Provider value={contextValue}>
      {children}
    </CreatedErrorModalContext.Provider>
  );
}

export default ErrorModalProvider;
