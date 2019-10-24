import React from "react";
import ReactDOM from "react-dom";
import "./App/index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from './utils/store/reducers'

const middleware = [
  createLogger({
    duration: true,
    level: "info",
    collapsed: true,
    colors: {
      title: () => "#299bd8",
      nextState: () => "#299bd8"
    }
  })
];

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
