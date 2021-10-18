import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));

//STORE -> GLOBALIZED STATE

//ACTION INCREMENT - function that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//REDUCER - DESCRIBES HOW ACTIONS TRANSFORMS STATE INTO NEXT STATE
//checks action, and based on action it changes store
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

//display in console
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
