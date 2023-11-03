import { createContext, useContext } from "react";
import { LoaderContextState, LoaderState } from "./types";

const LoaderInitialState: LoaderState = {
  loading: false,
};

const CreatedLoaderContext = createContext<LoaderContextState>({
  state: LoaderInitialState,
  actions: {
    setLoader(loading) {
      /** */
    },
  },
});

const LoaderContext = () => useContext(CreatedLoaderContext);

export { LoaderInitialState, CreatedLoaderContext, LoaderContext };
