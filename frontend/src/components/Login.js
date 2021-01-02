import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import LoginForm from './LoginForm';


function Login() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" fixed className="login-container">
                <h2>Te damos la bienvenida a Privi Transfer!</h2>
                <span>Nuevo en PriviTransfer? Registrate <Link to="/register">Aqui!</Link></span>
                <LoginForm />
            </Container>
      </React.Fragment>
    )
}

export default Login
