import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import FacebookIcon from '@material-ui/icons/Facebook';

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

  const responseFacebook = (response) => {
    console.log(response);
  }

  const responseGoogle = (response) => {
    console.log("received", response);
  }

  

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
    callback={responseFacebook}
    cssClass="buttonConfig"
    icon = {<FacebookIcon color="primary" />}
    />
    <span>
    <GoogleLogin
    clientId="235276926354-lmafu50sg1fs3o1tneqg3agqeokcs906.apps.googleusercontent.com"
    buttonText=""
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    className="buttonConfig"
    icon={true} />
  </span>
        
    
      </div>
    </React.Fragment>

  );
}

export default LoginForm;
