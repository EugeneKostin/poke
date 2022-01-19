// import './App.css';
import { Container, Box, Typography } from '@mui/material';
import { ClickHelper } from '../ClickHelper/ClickHelper';

export const Header = ({ title }) => {

  return (
    <Box sx={{
      width: '100%',
      height: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Box>
        <Typography>Hello</Typography>
      </Box>
      <ClickHelper />
    </Box>
  );

};