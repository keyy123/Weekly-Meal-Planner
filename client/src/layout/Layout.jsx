import {Link} from 'react-router-dom'
import { AppBar, TableContainer, Toolbar } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../Components/ui/Theme.js'
import "./Layout.css" 
import logo from "../Assets/logo.png"
import { Tabs, Tab } from '@material-ui/core'



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

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img src={logo} alt="company logo"/>
    {/* <h1 className="Title">Meal Prepper</h1> */}
    {currentUser ? (
              
                <Tabs className={classes.tabContainer}>
        <p>{currentUser.username}</p>
        <button className="Logout" onClick={handleLogout}><Tab className={classes.tab} label = "Logout"/></button>
                  <Link className="Layout L1" to='/Menus'>
                    <Tab className={classes.tab} label="Menus"/>
                  </Link>
                  <Link className="Layout L2" to='/'>
                    <Tab className={classes.tab} label="Home" />
                </Link>
                </Tabs>
      
            ) : (
              
                  <Tabs className={classes.tabContainer}>
                  <Link className="Login" to='/login'><Tab className={classes.tab} label="Login/SignUp" /></Link>
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
      <div className={classes.toolbarMargin}/>
        {props.children}
      </>
  )
}
