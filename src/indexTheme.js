import {red, orange} from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// A custom theme for this app
const indexTheme = createMuiTheme({

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),

    h3:{
      fontSize: '2rem',
      '@media (min-width:600px)': {fontSize: '2.5rem'},
      '@media (min-width:960px)': {fontSize: '3rem'},
      '@media (min-width:1280px)': {fontSize: '3.5rem'},
    }
  },

  palette: {
    primary: {
      main: orange["400"],
    },
    secondary: {
      main: red.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: orange["50"],
    },
  }
});

export default indexTheme;