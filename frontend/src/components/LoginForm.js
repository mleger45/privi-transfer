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
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";



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

  return (
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
        <Button variant="contained" color="primary">Iniciar Sesion</Button>
        </div>
        <div>
        <Link to="/forgot-password">Has olvidado tu clave?</Link>
        </div>
    </form>

  );
}

export default LoginForm;
