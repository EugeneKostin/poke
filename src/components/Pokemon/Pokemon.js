import React, { useState, useEffect } from 'react';

import { Container, Box, Typography, Stack, Grid } from '@mui/material';

import { pokeAPI } from '../../services/pokeAPI'
import { Header } from '../Header/Header';
import { ChipItem } from '../ChipItem/ChipItem';


export const Pokemon = () => {
  const initURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const title = 'Покемоны API'
  const [pokemonList, setPokemonList] = useState([])


  useEffect(() => {
    async function getPokeList() {
      let res = await pokeAPI(initURL)
      console.log(typeof (res.data.results));
      setPokemonList(res.data.results);
    }
    getPokeList();
  }, [])

  return (
    <Container disableGutters maxWidth='lg' sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '100%',
        height: '75vh',
        color: 'text.primary',
        border: 1,
      }}>
        <Container disableGutters maxWidth='md' sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <Header title={title} />
          <Box sx={{ height: 'calc(100% - 54px - 30px)', width: '100%', mt: '54px', display: 'flex' }}>
            <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', }}>
              {/* <Grid container rowSpacing='10px' columnSpacing='6px' alignItems='center' width: '50%', height: '100%'> cant center */}
              <Grid container rowSpacing='10px' columnSpacing='6px'>
                {pokemonList.map((data, index) => {
                  return <Grid item><ChipItem key={index} data={data.name} sx={{ margin: '20px' }} /></Grid>
                })}
              </Grid>
            </Box>
            <Box sx={{
              width: '50%',
              bgcolor: '#000',
            }}>
            </Box>
          </Box>
        </Container>
      </Box >
    </Container >
  );
};