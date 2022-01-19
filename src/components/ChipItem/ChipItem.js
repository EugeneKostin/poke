// import './App.css';
import { Chip } from '@mui/material';

export const ChipItem = ({ data }) => {
  const handleClick = () => {
    return
  };
  return (
    <Chip label={data} color='primary' onClick={handleClick}
      sx={{
        padding: 2.5,
        fontSize: '1.25rem',
        fontWeight: 'typography.fontWeightRegular',
        height: 'auto',
        borderRadius: '44px',
      }} />
  );

};