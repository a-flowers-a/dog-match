import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Context Providers
import AuthProvider from "./context/AuthProvider";
import LoaderProvider from "./context/LoaderProvider";
import ErrorModalProvider from "./context/ErrorModal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <LoaderProvider>
        <ErrorModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorModalProvider>
      </LoaderProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
