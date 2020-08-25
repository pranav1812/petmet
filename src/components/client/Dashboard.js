import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import { Route, Switch, Link, useParams } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PetsIcon from "@material-ui/icons/Pets";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarsIcon from "@material-ui/icons/Stars";
// import MyLeads from './myLeads';
// import Profile from './profile'
import { auth, db } from "../../firebase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import DashboardClient from "../dashboardclient/DashboardClient";
// import Lead from './lead'
import MainLogo from "../pictures/Final Main Logo PET MET.png";
import Addpet from "./Addpet";
import MyPets from "./MyPets";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Appointment from "./Appointment";
import Home from "./Home";
import ShopPage from '../shop/ShopPage';
import ShopProducts from './ShopProducts';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       Petmet {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
    backgroundColor: "#F1F1F1",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { componentt } = useParams();
  const [name, setName] = useState(null);
  const [uid, setUid] = useState(null);
  const [usr, setUsr] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setUsr(user);
        console.log(user);
        db.collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (user.emailVerified && !doc.exists) {
              db.collection("user").doc(user.uid).set({
                name: user.displayName,
                profileCompleted: false,
              });
            }
            if (doc.exists) setName(doc.data().name);
            else setName(user.displayName);
          });
      }
    });
  }, []);

  const logout = () => {
    auth
      .signOut()
      .then(function () {
        console.log("Sign-out successful");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toLoginPage = () => {
    window.location = "http://localhost:3000/login";
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="#282c3f"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <img style={{ width: "153px", height: "44px" }} src={MainLogo} />

            <form style={{ float: "right" }} class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <Link to={"/Home/"}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

            <Link to={"/myPets/"}>
              <ListItem button>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText primary="My Pets" />
              </ListItem>
            </Link>

            <Link to={"/Cart/"}>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
            </Link>

            <Link to={"/Wishlist/"}>
              <ListItem button>
                <ListItemIcon>
                  <StarsIcon />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItem>
            </Link>
            <Link to={"/Appointment/"}>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Appointments" />
              </ListItem>
            </Link>
            <Divider />
            <ListItem button onClick={usr ? logout : toLoginPage}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={usr ? "Logout" : "Login"} />
            </ListItem>
            {usr ? (
              <Link to="/verifyEmail">
                <ListItem button>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Edit Profile" />
                </ListItem>
              </Link>
            ) : null}
          </div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}

            <Paper style={{ width: "100%" }}>
              {componentt == "Home" ? (
                <DashboardClient />
              ) : componentt == "myPets" ? (
                <MyPets />
              ) : componentt == "Cart" ? (
                <Cart />
              ) : componentt == "Wishlist" ? (
                <Wishlist />
              ) : componentt == 'Addpet' ? (
                <Addpet />
              ) : componentt == "ShopProducts" ? (
                <ShopProducts />
              ) : componentt == 'ShopPage' ? (
                 <ShopPage /> 
              ) :componentt == "Appointment" ? (
                <Appointment />
              ) : (
                <Home />
              )}
            </Paper>
          </Grid>
          <Box pt={4}></Box>
        </Container>
      </main>
    </div>
  );
}
