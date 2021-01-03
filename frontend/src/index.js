import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ButtonAppBar from "./components/AppBar";
import { UserContext } from "./contexts/user-context";


ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider>
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    </UserContext.Provider >
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
