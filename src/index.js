import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./utils/store/reducers/country";
import thunk from "redux-thunk";

const middleware = [
  createLogger({
    duration: true,
    level: "info",
    collapsed: true,
    colors: {
      title: () => "#299bd8",
      nextState: () => "#299bd8"
    }
  }),
  thunk
];

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
