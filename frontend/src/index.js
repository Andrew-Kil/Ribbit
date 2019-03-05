import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// import { combineReducers, createStore } from "redux";
// import { Provider } from "react-redux";

// const productsReducer = (state = [], action) => {
//   return state;
// };

// const userReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "updateUser":
//       return payload;
//   }
//   return state;
// };

// const allReducers = combineReducers({
//   products: productsReducer,
//   user: userReducer
// });

// const store = createStore(
//   allReducers,
//   {
//     products: [{ name: "iPhone" }],
//     user: "Michael"
//   },
//   window.devToolsExtension && window.devToolsExtension()
// );

// const updateUserAction = {
//   type: "updateUser",
//   payload: {
//     user: "John"
//   }
// };

// store.dispatch(updateUserAction);

// console.log(store.getState());

// const action = {
//   type: "changeState",
//   payload: {
//     newState: "New state"
//   }
// };

// console.log(store.getState());

ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
