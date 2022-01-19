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
        <Typography component='span' sx={{
          border: 1,
          textTransform: 'uppercase',
          padding: '6px',
          fontSize: '.75rem',
          lineHeight: 1,
        }}>
          {title}
        </Typography>
      </Box>
      <Box width='calc(max(15%, 140px))'>
        <ClickHelper />
      </Box>

    </Box>
  );

};