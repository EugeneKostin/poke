import React, { useState, useEffect } from 'react';

import { Container, Box, Typography, Stack, Grid } from '@mui/material';

import { pokeAPI } from '../../services/pokeAPI'
import { Header } from '../Header/Header';
import { ChipItem } from '../ChipItem/ChipItem';
import { Definition } from '../Definition/Definition';


export const Pokemon = () => {
  const initURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const title = 'Покемоны API'
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonDefinition, setPokemonDefinition] = useState({})

  const handleChipClick = async (url) => {
    let res = await pokeAPI(url)
    await console.log(res.data);
    setPokemonDefinition({
      title: res.data.name,
      image: res.data.sprites.front_default,
      numOfMoves: res.data.moves.length,
      id: res.data.id,
      height: res.data.height,
      attack: res.data.stats[1].base_stat,
    })
  }

  useEffect(() => {
    (async () => {
      let res = await pokeAPI(initURL)
      setPokemonList(res.data.results);
    })();
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
                  return (
                    <Grid item key={index}>
                      <ChipItem data={data} handleClick={handleChipClick} sx={{ margin: '20px' }} />
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
            <Box sx={{
              width: '50%',
              bgcolor: '#000',
            }}>
              <Definition data={pokemonDefinition} />
            </Box>
          </Box>
        </Container>
      </Box >
    </Container >
  );
};