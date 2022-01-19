import './App.css';
import { Pokemon } from './components/Pokemon/Pokemon';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme, } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1986EC',
    },
    text: {
      primary: '#fff',
    },
    background: {
      default: '#131313',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      lg: 1280,
      md: 980,
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'background.default',
      }}>
        <Pokemon />
      </Box>
    </ThemeProvider>
  );
}

export default App;
