// import './App.css';
import { Box, Typography } from '@mui/material';

export const Definition = ({ data }) => {

  return (
    <Box
      sx={{
        padding: 2.5,
        fontSize: '1.25rem',
        fontWeight: 'typography.fontWeightRegular',
        height: 'auto',
        borderRadius: '44px',
      }}>
      <Typography>{data.title}</Typography>
      <Box>
        <img src={data.image} />
      </Box>
      <Box>
        <Typography>Снялся в {data.numOfMoves} сериях</Typography>
        <Typography>id: {data.id}</Typography>
        <Typography>height: {data.height}</Typography>
        <Typography>atack: {data.attack}</Typography>
      </Box>
    </Box>
  );

};