import { ChipItem } from '../ChipItem/ChipItem';
import { Grid } from '@mui/material';
import React from 'react';

export const ChipList = React.memo(({ pokemonList, handleChipClick }) => {

  return (
    <Grid container rowSpacing='10px' columnSpacing='6px' >
      {pokemonList.map((data, index) => {
        return (
          <Grid item key={index}>
            <ChipItem data={data} handleChipClick={handleChipClick} />
          </Grid>

        )
      })}
    </Grid >
  );

});