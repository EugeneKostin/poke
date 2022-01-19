// import './App.css';
import { Chip } from '@mui/material';

export const ChipItem = ({ data, handleClick }) => {

  return (
    <Chip label={data.name} color='primary' onClick={() => handleClick(data.url)}
      sx={{
        padding: 2.5,
        fontSize: '1.25rem',
        fontWeight: 'typography.fontWeightRegular',
        height: 'auto',
        borderRadius: '44px',
      }} />
  );

};