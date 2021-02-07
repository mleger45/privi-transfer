import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import User from '../domains/user';
import { UserContext } from "../contexts/user-context";


import "./LoginForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  const responseGoogleFailure = (response) => {
    console.log("Error with google authentication")
  };

const responseHandler= (response) => {
    console.log("🧖", response);
    const userObj = User.createUser(response);
    setUser({userObj, isLogged: true})
    history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField id="standard-basic" label="Email" />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <Button variant="contained" color="primary">
            Iniciar Sesion
          </Button>
        </div>
        <div>
          <Link to="/forgot-password">Has olvidado tu clave?</Link>
        </div>
      </form>
      <p>O inicia sesión con </p>
      <div className="login__social">
        <FacebookLogin
          appId="756375151900873"
          autoLoad={false}
          fields="name,email,picture"
          textButton=""
          callback={responseHandler}
          cssClass="buttonConfig"
          icon={<FacebookIcon color="primary" />}
        />
        <span>
          <GoogleLogin
            clientId="235276926354-lmafu50sg1fs3o1tneqg3agqeokcs906.apps.googleusercontent.com"
            buttonText=""
            onSuccess={responseHandler}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
            className="buttonConfig"
            icon={true}
          />
        </span>
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
