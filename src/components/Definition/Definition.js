import { Box, Typography, List, ListItem } from '@mui/material';
import React from 'react';

export const Definition = React.memo(({ data }) => {

  const { title, image, numOfMoves, id, height, attack } = data;

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      fontSize: { xs: '.75rem', sm: '1.0625rem' },
      color: 'text.secondary',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Typography component='span' sx={{
        fontSize: { xs: '2rem', sm: '3rem' },
        fontWeight: 'Bold',
        textTransform: 'capitalize',
        lineHeight: 1,
      }}>
        {data.title}
      </Typography>
      <Box sx={{
        width: '100%',
        height: { xs: '150px', sm: '200px' },
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={image} alt={title} height='100%' />
      </Box>
      <List sx={{ p: 0, lineHeight: 1.5, }}>
        <ListItem disablePadding>Снялся в {numOfMoves} сериях</ListItem>
        <ListItem disablePadding>id: {id}</ListItem>
        <ListItem disablePadding>height: {height}</ListItem>
        <ListItem disablePadding>atack: {attack}</ListItem>
      </List>
    </Box>
  );

});