import {Link, useHistory} from 'react-router-dom'
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery,useTheme, Drawer, IconButton}  from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../Components/ui/Theme.js'
import "./Layout.css" 
import logov3 from "../Assets/logov3.png"
import { useState, useEffect } from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import { ListItemText, List, ListItem, Divider, ListItemIcon } from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Footer from '../Components/Footer/Footer.jsx'

const useStyles = makeStyles({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("md")]:{
      marginBottom: "1em"
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom: "0em"
    }
  },
  tabContainer: {
marginLeft:"auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    [theme.breakpoints.down("md")]:{
      color: "purple",
    }
  },
  logo: {
    height: "15em",
     [theme.breakpoints.down("md")]: {
       height: "12.5em"
     },
     [theme.breakpoints.down("xs")]: {
       height: "10em"
     }
  },
  drawer: {
    marginLeft: "auto" 
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawerStyle: {
    backgroundColor: theme.palette.common.Blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "White",
    [theme.breakpoints.down("md")]: {
    fontSize:"1rem"      
    }
  },
  drawerStyle2: {
    backgroundColor: theme.palette.common.LightBlue
  },
  appbar: {
    position: "relative"
  }


    })


export default function Layout(props) {
  const {currentUser, handleLogout} = props
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)
 const history = useHistory()
  
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (window.location.pathname === "/Logout" && value !== 0 ) {
      setValue(0)
    }
    else if (window.location.pathname === "/Menus" && value !== 1) {
      setValue(1)
    }
    else if (window.location.pathname === "/Home" && value !== 2) {
      setValue(2)
    }
    else if (window.location.pathname === "/Login" && value !== 3) {
      setValue(3)
    }
    else if (window.location.pathname === "/Register" && value !== 4) {
      setValue(4)
    }
  }, [value])
  

  const tabs = (
    <>
      {currentUser ? (
              
              <>
              <p>{currentUser.username}</p>
              <Tabs
                      value={value}
                      indicatorColor="primary"
                      onChange={handleChange}
                      className={classes.tabContainer}
                    >
                        
                        <Tab value={0} className={classes.tab} label="Logout" onClick={handleLogout} component={Link} to="/Logout"/>
                      
                        <Tab value={1} className={classes.tab} label="Menus" component={Link} to="/menus"/>
                        
                          <Tab value={2} className={classes.tab} label="Home" component={Link} to="/Home"/>
                      
                      </Tabs>
            </>
                  ) : (
                    
                      <Tabs
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                        className={classes.tabContainer}
                      >
                          
                          <Tab value={3} className={classes.tab} label="Login" component={Link} to="/Login"/>
                        
                          <Tab value={4} className={classes.tab} label="Register" component={Link} to="/Register"/>
                    
                      </Tabs>
                      
                      
                  )}
      </>
  )
  
  const drawer = (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        className={classes.drawer}
        onClose={() => { handleDrawerClose() }}
        classes={{paper: classes.drawerStyle }}
      >
      <List>
          <ListItem
            
          >
            <ListItemIcon>
              <AccountBoxRoundedIcon/>
            </ListItemIcon>
            <ListItemText className={classes.drawerItem} disableTypography primary={currentUser? `Welcome ${currentUser.username}` : `Please Login`}/>
          </ListItem>
        </List>
        <Divider/>
        <List>
          <ListItem
            selected={value === 2}
            component={Link} to="/Home"
            button
            onClick={() => {setOpenDrawer(false); setValue(2)}} 
          >
            <ListItemIcon>
              <HomeRoundedIcon/>
            </ListItemIcon>
            <ListItemText className={classes.drawerItem} disableTypography primary="Home"/>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
           selected={value===1}
            component={Link} to="/menus"
            button onClick={() => {setOpenDrawer(false); setValue(1)}}
            
          >
            <ListItemIcon>
                <RestaurantMenuRoundedIcon/>
            </ListItemIcon>
            <ListItemText className={classes.drawerItem} disableTypography primary="Menus"/>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            
            selected={value===0}
            button onClick={() => { currentUser ? (handleLogout()) : (history.push('/Login')); setValue(0) }}
            className={classes.drawerStyle2}
            
          >
            <ListItemIcon>
              <ExitToAppRoundedIcon/>
            </ListItemIcon>
            <ListItemText className={classes.drawerItem} disableTypography primary={currentUser ? "Logout" : "Login"}/>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
</>
 )

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" className={classes.appbar} color="primary">
          <Toolbar disableGutters>
            <img className={classes.logo}src={logov3} alt="company logo"/>
    {matches ? drawer : tabs }
          </Toolbar>
      </AppBar>
      </ThemeProvider>
      
      {props.children}
      <Footer/>
      
      </>
  )
}
