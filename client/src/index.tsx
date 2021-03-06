import React from "react";
import ReactDOM from "react-dom";
import "./index.min.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  //* IN DEVELOPMENT, DUE TO <React.StrictMode></React.StrictMode> ALL REDUCERS ARE CALLED TWICE BY REACT TO CHECK FOR PURITY.
  //* IN PRODUCTION THEY WILL ONLY BE CALLED ONCE, (see: Alert component)
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
