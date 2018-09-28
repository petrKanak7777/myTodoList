import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./components/App";

import "./resources/css/styles.css";

export const store = createStore(rootReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

render(
  /* JSX - syntactic sugar for 
             React.createElement(component, props, ...children) fun */
  /*<Provider store={store}>
      <App />
  </Provider>,*/

  React.createElement(
    Provider,
    { key: "provider", store: store },
    React.createElement(App, { key: "app" }, null)
  ),

  document.getElementById("root")
);
