// import './App.css';
import { Box, Typography } from '@mui/material';
import icon from "../../assets/icons/click.svg";
export const ClickHelper = () => {

  return (
    <Box sx={{
      display: 'flex',
      width: 'calc(max(15%, 140px))',
      position: 'absolute',
      top: 0,
      right: 0,
    }}>
      <img src={icon} />
      <Typography sx={{
        ml: '10px',
        fontSize: '.75rem',
        lineHeight: 1,
      }}>
        Нажмите на нужного Покемона
      </Typography>
    </Box>
  );

};

