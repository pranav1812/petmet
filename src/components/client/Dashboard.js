import React, { useState, useEffect } from "react";
import clsx from "clsx";
import "./DASHBOARD.css";
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
import EditProfile from "./Profile";
import { auth, db } from "../../firebase";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import DashboardClient from "../dashboardclient/DashboardClient";
// import Lead from './lead'
import MainLogo from "../pictures/Logo WT Tagline PET MET.png";
import Addpet from "./Addpet";
import MyPets from "./MyPets";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Appointment from "./Appointment";
import Home from "./Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ShopPage from "../shop/ShopPage";
import ShopProducts from "./ShopProducts";
import Footer from "../FooterNew";
import VetProfile from "./VetProfile";
import { Button } from "@material-ui/core";
import {MdAccountCircle,MdShoppingCart} from 'react-icons/md';
import {
  Modal,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { RiLogoutBoxRFill } from "react-icons/ri";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // toolbar: {
  //   paddingRight: 24,
  //   backgroundColor: "#F1F1F1",
  // },
  // toolbarIcon: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: "0 8px",
  //   ...theme.mixins.toolbar,
  // },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
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
    zIndex: "100000",
    width: "100%",
  },

  // drawerPaper: {
  //   position: "relative",
  //   whiteSpace: "nowrap",
  //   width: drawerWidth,
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: "hidden",
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(0),
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.spacing(9),
  //   },
  // },
  // appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   height: "100vh",
  //   overflow: "auto",
  // },
  container: {
    zIndex: theme.zIndex.appBar - 1,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  paper: {
    // padding: theme.spacing(0),
    // display: "flex",
    // overflow: "auto",
    // flexDirection: "column",
  },
  // fixedHeight: {
  //   height: 240,
  // },
}));

const Modall = (prop) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [usr, setUsr] = useState(null);
  useEffect(() => {
    console.log(prop);
    var user = auth.currentUser;
    if (user) {
      setUsr(user);
    }
  }, []);
  const logout = () => {
    auth
      .signOut()
      .then(function () {
        alert("Sign-out successful");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Button
        className="accounticon"
        style={{
          float: "right",
          display: "inline",
          paddingLeft: "30px",
          color: "grey",
        }}
        onClick={handleShow}
      >
        <AccountCircleIcon />
        {prop.prop ? prop.prop : "guest user"}
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "80px",
              paddingBottom: "20px",
              color: "#36A9CC",
            }}
          >
            <RiLogoutBoxRFill />
          </span>
          <button
            className="btn-block pink-btn"
            onClick={
              prop.prop
                ? logout
                : () => {
                    window.location =
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      "/" +
                      "login";
                  }
            }
            style={{}}
          >
            {prop.prop ? "Log Out" : "Log In"}
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button className="pink-btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const componentt = useParams().componentt || "Home";

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
              db.collection("user")
                .doc(user.uid)
                .set({
                  name: user.displayName || "Guest",
                  profileCompleted: false,
                });
            }
            if (doc.exists) setName(doc.data().name);
            else setName(user.displayName);
            console.log(name);
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
    window.location =
      window.location.protocol + "//" + window.location.host + "/" + "login";
  };

  return (
    <div style={{backgroundColor: "#ffffff"}}>
      {/* <CssBaseline /> */}
      <AppBar
        position="absolute"
        // className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        {/* <Toolbar className={classes.toolbar}> */}
        {/* <IconButton
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
          </IconButton> */}
        {/* <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        > */}
        <Navbar className="newnavbar" expand="lg">
            <Navbar.Brand href="#home">
              <img
                className="mainlogoonnav mb-2"
                style={{ width: "130px", height: "33px" }}
                src={MainLogo}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" style={{position:"relative",zIndex:"999",backgroundColor:"#ffffff"}}>
                <Nav.Link className="newnavitems" href="/Home/">
                  Home
                </Nav.Link>
                <Nav.Link className="newnavitems" href="/MyPets/">
                  My Pets
                </Nav.Link>
                <Nav.Link className="newnavitems" href="/Wishlist/">
                  Wishlist
                </Nav.Link>
                <Nav.Link className="newnavitems" href="/Appointments/">
                  Appointments
                </Nav.Link>
                 {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* <Form>
                <FormControl
                  type="text"
                  className="newnavsearchbox"
                  placeholder="Search Pet food, special toys and many more...."
                  className="mr-sm-4"
                  
                />
                
              </Form> */}
              <input 
                type="text"
                placeholder=" Search Pet food, special toys and many more...."
                className="newnavsearchbox" />
              <div className="row mt-lg-4">
                <div className="mr-lg-4">
                  <MdAccountCircle style={{fontSize:"33px",color:"#36a9cc"}}/>
                  <p>Profile</p>
                </div>
                <div className="mr-lg-4">
                  <MdShoppingCart style={{fontSize:"33px",color:"#979797"}}/>
                  <p>Cart</p>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>

          {/* <Link to="/Home">
              <img
                className="mainlogoonnav"
                style={{ width: "130px", height: "33px" }}
                src={MainLogo}
              />
            </Link>

            <div
              style={{ float: "right", display: "inline" }}
              className="searchicon"
            >
              {/* <NotificationsNoneIcon /> */}
          {/* </div> */}
          {/*Yaha lagana hai*/}

          {/* <>{name ? <Modall prop={name} /> : <Modall prop={null} />}</>

            <div
              style={{ float: "right", display: "inline" }}
              className="searchicon"
            >
              <SearchIcon />
            </div> */}

          {/* <form
              style={{ float: "right" }}
              className="form-inline navbarsearch my-2 my-lg-0"
            >
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button class="btn searchbutton  my-2 my-sm-0" type="submit">
                Search
              </button>
            </form> */}
        {/* </Typography> */}
        {/* </Toolbar> */}
      </AppBar>
      {/* <Drawer
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
              <Link to="/editProfile">
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
      </Drawer> */}
      <div className={classes.container}>
         
            {/* Chart */}

            {componentt == "Home" ? (
              <DashboardClient />
            ) : componentt == "myPets" ? (
              <MyPets />
            ) : componentt == "Cart" ? (
              <Cart />
            ) : componentt == "Wishlist" ? (
              <Wishlist />
            ) : componentt == "Addpet" ? (
              <Addpet />
            ) : componentt == "ShopProducts" ? (
              <ShopProducts />
            ) : componentt == "VetProfile" ? (
              <VetProfile />
            ) : componentt == "ShopPage" ? (
              <ShopPage />
            ) : componentt == "Appointment" ? (
              <Appointment />
            ) : componentt == "editProfile" ? (
              <EditProfile />
            ) : (
              <Home />
            )}
          
        
      </div>
      <Footer />
    </div>
  );
}
