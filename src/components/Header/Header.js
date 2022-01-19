// import './App.css';
import { Container, Box, Typography } from '@mui/material';
import { ClickHelper } from '../ClickHelper/ClickHelper';

export const Header = ({ title }) => {

  return (
    <Box>
      <Box>
        <Typography>Hello</Typography>
      </Box>
      <ClickHelper />
    </Box>
  );

};