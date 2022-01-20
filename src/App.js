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
      secondary: '#A0A0A0',
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
      xs: 0,
      sm: 560,
      md: 980,
      lg: 1280,
      xl: 1920,
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
