// import './App.css';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export const Definition = ({ data }) => {

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        fontSize: '1.0625rem',
        color: 'text.secondary',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Typography variant='h3' component='span' sx={{ fontWeight: 'Bold', textTransform: 'capitalize', lineHeight: 1, }}>{data.title}</Typography>
      <Box sx={{
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={data.image} alt={data.title} height='100%' />
      </Box>
      <List sx={{ p: 0, lineHeight: 1.5, }}>
        <ListItem disablePadding>Снялся в {data.numOfMoves} сериях</ListItem>
        <ListItem disablePadding>id: {data.id}</ListItem>
        <ListItem disablePadding>height: {data.height}</ListItem>
        <ListItem disablePadding>atack: {data.attack}</ListItem>
      </List>
    </Box >
  );

};