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
    setPokemonDefinition({
      title: res.name,
      image: res.sprites.front_default,
      numOfMoves: res.moves.length,
      id: res.id,
      height: res.height,
      attack: res.stats[1].base_stat,
    })
  }

  useEffect(() => {
    (async () => {
      let res = await pokeAPI(initURL)
      setPokemonList(res.results);
    })();
  }, [])

  return (
    <Container maxWidth='lg' sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: '100%',
        height: 'calc(min(75vh, 584px))',
        color: 'text.primary',
        fontWeight: 'fontWeightRegular',
        border: 1,
      }}>
        <Container disableGutters maxWidth='md' sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          <Header title={title} />
          <Box sx={{
            height: 'calc(100% - 54px - 30px)',
            width: '100%',
            mt: '54px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {/* Box на Grid изменить */}
            <Box sx={{ width: '100%', maxWidth: '484px', display: 'flex', alignItems: 'center', ml: '12px', }}>
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
              width: '100%',
              maxWidth: '484px',
              height: '100%',
              bgcolor: '#000',
              padding: '44px 44px 16px 44px',
            }}>
              <Definition data={pokemonDefinition} />
            </Box>
          </Box>
        </Container>
      </Box >
    </Container >
  );
};