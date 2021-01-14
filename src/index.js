import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { todoReducer } from "./store/reducers/todo";
import { Provider } from "react-redux";
import App from "./App";

const rootReducer = combineReducers({
  todos: todoReducer
});

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />{" "}
    </Provider>
  </React.StrictMode>,
  rootElement
);
