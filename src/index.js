import React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import { Provider } from "react-redux";

import App from "./containers/App";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
