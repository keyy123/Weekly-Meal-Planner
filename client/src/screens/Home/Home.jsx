
// import Logo from '../../Assets/Logo.gif'
import './Home.css'
import Lottie from 'react-lottie'
import animationData from '../../animations/path.json'
import animationData2 from '../../animations/fatigue.json'
import { makeStyles, Grid, Button, Typography, Paper } from '@material-ui/core'
import theme from '../../Components/ui/Theme.js' 


const useStyles = makeStyles(({ 
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%"
  },
  gridContainerStyle: {
    backgroundColor:"lightBlue"
  },
  buttonStyle: {
    borderRadius: "50px",
    marginTop:"10px",
    height: "45px",
    width: "145px",
    backgroundColor: theme.palette.common.Blue,
    "&:hover": {
      backgroundColor: theme.palette.primary.light
    },
    mainContainer: {
      marginTop: "5em",
      [theme.breakpoints.down("md")]: {
        marginTop: "3em"
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "2em"
      }
    },
    heroTextContainer: {
      minWidth: "21.5em",
      marginLeft: "1em"
    }
  },
  
  
}))


export default function Home() {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOption2 = {
    loop: true,
    autoplay: true, 
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }


  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item> {/*--Hero Block Section = Complete--*/}
          <Grid container alignItems="center" justifyContent="flex-end" direction="row" className={classes.gridContainerStyle}>
          <Grid sm md lg item>
            <Paper elevation={4}>
          <Typography variant="h2" color="primary" align="center" className={classes.heroTextContainer}>
              Fed Up With Food
              <br />
              Not Anymore!
              </Typography>
              </Paper>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button className={classes.buttonStyle} variant="contained">Join Today</Button>
                </Grid>
              </Grid>
            </Grid>
          <Grid sm md lg item className={classes.animation}> 
            <Lottie options={defaultOptions} height={"71.38%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*--Second Section-- */}
        <Grid container alignItems="center" justifyContent="flex-start" direction="row">
        <Grid sm md lg item>
            <Lottie options={defaultOption2} height={"71.38%"} width={"100%"}/>
          </Grid>
          <Grid sm md lg item>
          <Paper elevation={4}>
          <Typography variant="h2" color="primary" align="center">
              Fed Up With Food
              <br />
              Not Anymore!
              </Typography>
              </Paper>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button className={classes.buttonStyle} variant="contained">Join Today</Button>
              </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
    
  )
}
