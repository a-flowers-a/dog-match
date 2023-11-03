import { useCallback, useReducer } from "react";
import { CreatedLoaderContext, LoaderInitialState } from "./context";
import LoaderReducer from "./reducer";
import { LoaderActionName } from "./types";

function LoaderProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(LoaderReducer, LoaderInitialState);

  /**
   * Calls to dispatch to set the loader
   */
  const setLoader = useCallback((loading: boolean) => {
    dispatch({
      type: LoaderActionName.SET_LOADER,
      payload: loading,
    });
  }, []);

  const contextValue = {
    state,
    actions: { setLoader },
  };

  return (
    <CreatedLoaderContext.Provider value={contextValue}>
      {children}
    </CreatedLoaderContext.Provider>
  );
}

export default LoaderProvider;
