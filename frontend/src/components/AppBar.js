import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  MenuItem,
  Menu,
  Drawer,
} from "@material-ui/core";

import { UserContext } from "../contexts/user-context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}));

const navLinks = [
  { title: "Enterprise", path: "/about" },
  { title: "Promotions", path: "/about" },
  { title: "FAQ", path: "/about" },
  { title: "About", path: "/about" },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const navLoggedLinks = [
  {title: 'Home', path:'/dashboard'},
  {title: 'Account', path:'/user'},
  {title: 'How to', path:'/howto'},
]

const actionLinks = [
  {action: 'Enviar', path:'/send'}
]

export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [user, setUser] = useContext(UserContext);
  console.log("From Appbar", user);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key=='tab' || event.key === 'Shift' )){
      return;
    }
    setState({ ...state, [anchor]: open });
  }

  const list = (anchor) => (
    <div
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
        {actionLinks.map((textObj, index) => (
          <ListItem button key={textObj.action}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link to={textObj.path}><ListItemText primary={textObj.action} /></Link>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const navbarOptions = (user.isLogged)?navLoggedLinks:navLinks;


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Container className={classes.navbarDisplayFlex}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              aria-controls="home-menu"
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
              {list("left")}
            </Drawer>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navbarOptions.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}