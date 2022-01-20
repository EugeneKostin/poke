import React, { useState, useEffect } from 'react';

import { Container, Box, Typography, Grid, CircularProgress } from '@mui/material';

import { pokeAPI } from '../../services/pokeAPI'
import { Header } from '../Header/Header';
import { ChipList } from '../ChipList/ChipList';
import { Definition } from '../Definition/Definition';
import { ClickHelper } from '../ClickHelper/ClickHelper';

export const Pokemon = () => {

  const initURL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const title = 'Покемоны API';
  const [pokemonList, setPokemonList] = useState(null);
  const [pokemonDefinition, setPokemonDefinition] = useState(null);
  const [isDefinitionLoading, setIsDefinitionLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const handleChipClick = async (data) => {
    if (!pokemonDefinition || data.name !== pokemonDefinition.title) {
      setIsDefinitionLoading(true)
      const res = await FetchData(data.url);
      res && setPokemonDefinition({
        title: res.name,
        image: res.sprites.front_default,
        numOfMoves: res.moves.length,
        id: res.id,
        height: res.height,
        attack: res.stats[1].base_stat,
      })
      setIsDefinitionLoading(false)
    }
  };

  const FetchData = async (url) => {
    const res = await pokeAPI(url);
    if (res.err) {
      setFetchError(res.err);
      return
    } else if (res.data) {
      fetchError && setFetchError(null);
      return res.data
    }
  };

  const displayPokemonList = () => {
    if (pokemonList) {
      return (<ChipList pokemonList={pokemonList} handleChipClick={handleChipClick} />)
    } else if (fetchError) {
      return (<Typography>{fetchError}</Typography>)
    } else {
      return (<CircularProgress />)
    }
  }

  const displayDefinition = () => {
    if (pokemonDefinition) {
      return (<Definition data={pokemonDefinition} />)
    } else if (isDefinitionLoading) {
      return (<CircularProgress />)
    } else if (fetchError) {
      return (<Typography>{fetchError}</Typography>)
    } else {
      return (<ClickHelper />)
    }
  }

  useEffect(() => {
    (async () => {
      const res = await FetchData(initURL);
      res && setPokemonList(res.results);
    })()
  }, []);


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
          position: 'relative',
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
            <Box sx={{ width: '100%', maxWidth: '484px', display: 'flex', alignItems: 'center', justifyContent: 'center', ml: '12px', }}>
              {/* <Grid container rowSpacing='10px' columnSpacing='6px' alignItems='center' width: '50%', height: '100%'> cant center */}
              {displayPokemonList()}
            </Box>
            <Box sx={{
              width: '100%',
              maxWidth: '484px',
              height: '100%',
              bgcolor: '#000',
              padding: '44px 44px 16px 44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {displayDefinition()}
            </Box>
          </Box>
        </Container>
      </Box >
    </Container >
  );
};