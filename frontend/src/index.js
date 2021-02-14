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
import PaymentWorkflow from "./components/payment/PaymentWorkflow";
import { UserProvider } from "./contexts/user-context";
import About from "./components/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ButtonAppBar />
      </UserProvider>
      <Switch>
        <Route path="/login">
          <UserProvider>
            <Login />
          </UserProvider>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={App} />
        <Route path="/send" component={PaymentWorkflow} />
        <Route path="/dashboard">
          <UserProvider>
            <Dashboard />
          </UserProvider>
        </Route>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
