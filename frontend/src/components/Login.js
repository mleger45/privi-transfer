import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { UserContext } from "../contexts/user-context";

function Login() {
  const [user, setUser] = useContext(UserContext);
  if (user.isLogged) {
    //redirect to dashboard
    console.log("User is logged");
  } else {
    console.log("User is not logged");
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" fixed className="login-container">
        <h2>Te damos la bienvenida a Privi Transfer!</h2>
        <span>
          Nuevo en PriviTransfer? Registrate <Link to="/register">Aqui!</Link>
        </span>      
          <LoginForm />
      </Container>
    </React.Fragment>
  );
}

export default Login;
