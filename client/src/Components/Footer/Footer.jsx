import { makeStyles, Grid } from '@material-ui/core'
import theme from '../ui/Theme.js'
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  footer: {
    backgroundColor: theme.palette.common.Blue,
    width: "100%",
    height: "fit-content",
    position: "relative",
    zIndex: 1302,
    [theme.breakpoints.down("md")]: {
      height: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "fit-content"
    },
    mainGridContainer: {
      position: "absolute"
    },
  },
  link: {
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icons: {
    fontSize: "2em",
    color: "white",
  },
  iconGrid: {
    position: 'relative',
    right: "1.5em"
  }
})
export default function Footer() {
  const classes = useStyles()  

  return (
    <footer className={classes.footer}>
      <>
      <Hidden mdDown>
      <Grid container className={classes.mainGridContainer} justify="center">
      <Grid item className={classes.gridItem}>
        <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Caffeine
            </Grid>
          </Grid>
          </Grid>
        
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
            <Grid item>
              HI
            </Grid>
            </Grid> 
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/menus" className={classes.link}>
              Menus
            </Grid>
            <Grid item>
              Recipes
            </Grid>
          </Grid>
          </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
            <Grid item className={classes.link}>
              Contact Me!
            </Grid>
            <Grid item component={"a"} href="https://www.linkedin.com/in/kheyyon-parker/" target="_blank" rel="noreferrer">
              <LinkedInIcon className={classes.icons} />
            </Grid>
            <Grid item component={"a"} href="https://github.com/keyy123" target="_blank" rel="noreferrer">
              <GitHubIcon className={classes.icons}/>
            </Grid>
            <Grid item component={"a"} href="mailto:kheyyon.parker@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon className={classes.icons}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Overflow
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        </Hidden>
        
</>
  </footer>
  )}
