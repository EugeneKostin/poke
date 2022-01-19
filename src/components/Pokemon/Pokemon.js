import React, { useState, useEffect } from 'react';

import { Container, Box, Typography, Stack } from '@mui/material';

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
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '100%',
        height: '80vh',
        maxWidth: 1280,
        color: 'text.primary',
        border: 1,
      }}>
        <Header title={title} />
        <Stack direction='row' flexWrap='wrap'>
          {pokemonList.map((data, index) => {
            return <ChipItem key={index} data={data.name} sx={{ margin: '20px' }} />
          })}
        </Stack>
      </Box>
    </Box >
  );
};