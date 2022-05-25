import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

import "./index.css";
import "semantic-ui-css/semantic.min.css";

import storeConfig from "./store/configureStore";

const store = storeConfig();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
