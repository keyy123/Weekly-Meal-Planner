import {Link} from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../Components/ui/Theme.js'
import "./Layout.css" 
import logo from "../Assets/logo.png"
import { Tabs, Tab } from '@material-ui/core'
import { useState, useEffect } from 'react'


const useStyles = makeStyles({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em"
  },
  tabContainer: {
marginLeft:"auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  }

    })


export default function Layout(props) {
  const {currentUser, handleLogout} = props
  


  const classes = useStyles()

  const [value, setValue] = useState(0)

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

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img src={logo} alt="company logo"/>
    {/* <h1 className="Title">Meal Prepper</h1> */}
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
