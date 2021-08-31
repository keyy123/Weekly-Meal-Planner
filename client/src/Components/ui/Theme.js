import { createTheme } from "@material-ui/core/styles";

const DenimBlue = "#1D58D6"
const DownyBlue="#78C0D2"


export default createTheme({
  palette: {
    common: {
      Blue: `${DenimBlue}`,
      LightBlue:`${DownyBlue}`
    },
    primary: {
      main:`${DenimBlue}`
    },
    secondary: {
      main:`${DownyBlue}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Heebo, sans-serif",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "2em"
    }
  },
   


});

