// import './App.css';
import { Chip } from '@mui/material';

export const ChipItem = ({ data, handleChipClick }) => {

  return (
    <Chip label={data.name} color='primary' onClick={() => handleChipClick(data)}
      sx={{
        px: 1,
        py: { xs: 1.5, md: 2.5 },
        fontSize: { xs: '.75rem', md: '1.25rem' },
        fontWeight: 'Regular',
        height: 'auto',
        borderRadius: '44px',
        lineHeight: 1,
      }} />
  );

};