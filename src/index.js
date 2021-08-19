import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./base.scss";
import store from "./redux/store";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root"),
);
