import { Box, Typography } from '@mui/material';
import React from 'react';

export const Header = React.memo(({ title }) => {

  return (
    <Box sx={{
      width: '100%',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Typography component='span' sx={{
        border: 1,
        textTransform: 'uppercase',
        padding: '6px',
        fontSize: '.75rem',
        lineHeight: '14px',
      }}>
        {title}
      </Typography>
    </Box>
  );

});