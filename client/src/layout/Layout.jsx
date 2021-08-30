import {Link} from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../Components/ui/Theme.js'
import "./Layout.css" 


const useStyles = makeStyles({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
})

export default function Layout(props) {
  const {currentUser, handleLogout} = props
  


  const classes = useStyles()

  return (
    <>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
      <Toolbar>
    <h1 className="Title">App Name</h1>
    {currentUser ? (
      <div className="Nav">
        <p>{currentUser.username}</p>
        <button className="Logout" onClick={handleLogout}>Logout</button>
        <Link className="Layout L1" to='/Menus'>Menus</Link>
        <Link className="Layout L2" to='/'>Home</Link> 
      </div>
    ) : (
      <Link to='/login'>Login/SignUp</Link>
    )}
    {/* {currentUser && (
      <div>
         
            </div>
          )} */}
          </Toolbar>
      </AppBar>
      </ThemeProvider>
       <div className={classes.toolbarMargin}/>
        {props.children}
      </>
  )
}
