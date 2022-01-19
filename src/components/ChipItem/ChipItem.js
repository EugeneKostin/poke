// import './App.css';
import { Chip } from '@mui/material';

export const ChipItem = ({ data, handleClick }) => {

  return (
    <Chip label={data.name} color='primary' onClick={() => handleClick(data.url)}
      sx={{
        //  у Label pr pl по 8px, надо что-то сделать
        padding: 2.5,
        fontSize: '1.25rem',
        fontWeight: 'Regular',
        height: 'auto',
        borderRadius: '44px',
      }} />
  );

};