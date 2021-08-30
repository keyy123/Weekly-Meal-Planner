import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery,useTheme, Drawer, IconButton}  from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../Components/ui/Theme.js'
import "./Layout.css" 
import logov3 from "../Assets/logov3.png"
//import {  Drawer } from '@material-ui/core'
import { useState, useEffect } from 'react'
import MenuIcon from "@material-ui/icons/Menu"


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
  }

    })


export default function Layout(props) {
  const {currentUser, handleLogout} = props
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)
  
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  const handleChange = (e, value) => {
    setValue(value)
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
},[value])

  const tabs = (
    <>
      {currentUser ? (
              
              <>
              <p>{currentUser.username}</p>
              <Tabs
                      value={value}
                      indicatorColor="secondary"
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
                        indicatorColor="secondary"
                        onChange={handleChange}
                        className={classes.tabContainer}
                      >
                          
                          <Tab value={3} className={classes.tab} label="Login" component={Link} to="/Login"/>
                        
                          <Tab value={4} className={classes.tab} label="Register" component={Link} to="/Register"/>
                    
                      </Tabs>
                      
                      
                  )}
          {/* {currentUser && (
            <div>
               
                  </div>
                )} */}
      </>
  )
  
  const drawer = (
    <>
      <Drawer
        variant="persistent"
        anchor="right"
        open={openDrawer}
        className={classes.drawer}
        onClose={() => { setOpenDrawer(!openDrawer) }}
        onOpen={() => { setOpenDrawer(true) }}
      >
        Practice
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
</>
 )

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" className="AppBar" >
          <Toolbar disableGutters>
            <img className={classes.logo}src={logov3} alt="company logo"/>
    {/* <h1 className="Title">Meal Prepper</h1> */}
    {matches ? drawer : tabs }
          </Toolbar>
      </AppBar>
      </ThemeProvider>
      <div className={classes.toolbarMargin} />
      <div className={classes.toolbarMargin} />
      <div className={classes.toolbarMargin} />
      
        {props.children}
      </>
  )
}
