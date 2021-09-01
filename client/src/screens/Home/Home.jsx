
// import Logo from '../../Assets/Logo.gif'
import './Home.css'
import Lottie from 'react-lottie'
import animationData from '../../animations/path.json'
import animationData2 from '../../animations/fatigue.json'
import animationData3 from '../../animations/cooking.json'
import { makeStyles, Grid, Button, Typography, Paper } from '@material-ui/core'
import theme from '../../Components/ui/Theme.js'
import {Link} from 'react-router-dom'


const useStyles = makeStyles(({ 
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%"
  },
  gridContainerStyle: {
    backgroundColor: "lightBlue",
    paddingBottom: "140px"
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
  gridContainerStyle2: {
    backgroundColor: theme.palette.primary.light,
    paddingBottom: "70px"
  },
  gridContainerStyle3: {
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: '70px'
  }
  
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

  const defaultOption3 = {
    loop: true,
    autoplay: true, 
    animationData: animationData3,
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
                <Button component={Link} to="/Login" className={classes.buttonStyle} variant="contained">Join Today</Button>
                </Grid>
              </Grid>
            </Grid>
          <Grid sm md lg item className={classes.animation}> 
            <Lottie options={defaultOptions} height={"71.38%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*--Second Section-- */}
        <Grid container alignItems="center" justifyContent="flex-start" direction="row" className={classes.gridContainerStyle2}>
        <Grid sm md lg item className={classes.animation}>
            <Lottie options={defaultOption2} height={"60.38%"} width={"100%"}/>
          </Grid>
          <Grid sm md lg item>
          <Paper elevation={4}>
          <Typography variant="h2" color="primary" align="center">
              Studies from pubmed suggests that high diet quality in addition to 
              <br />
              high quality and quantity of sleep and isocaloric diet!
              </Typography>
              </Paper>
              {/* <Grid container justifyContent="center">
                <Grid item>
                  <Button className={classes.buttonStyle} variant="contained">Join Today</Button>
              </Grid>
              </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item> {/*--Third Section--*/}
        <Grid container alignItems="center" justifyContent="flex-end" direction="row" className={classes.gridContainerStyle3}>
          <Grid sm md lg item>
            <Paper elevation={4}>
              <Typography variant="h2" color="primary" align="center" >
                Plus when you have a meal plan in place, <br/>you can focus on
                picking up your home cooking skills
              </Typography>
            </Paper>
          </Grid>
          <Grid sm md lg item className={classes.animation}>
            <Lottie options={defaultOption3} height={"100%"} width={"100%"}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
    
  )
}
