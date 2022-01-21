import { Box, Typography } from '@mui/material';
import icon from "../../assets/icons/click.svg";
export const ClickHelper = () => {

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <img src={icon} width='24.25px' />
      <Typography sx={{
        ml: '10px',
        fontSize: '.75rem',
        fontWeight: 'Medium',
        lineHeight: 1,
        width: '113px'
      }}>
        Нажмите на нужного Покемона
      </Typography>
    </Box>
  );

};
