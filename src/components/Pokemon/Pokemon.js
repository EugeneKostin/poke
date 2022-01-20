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
      const res = await fetchData(data.url);
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

  const fetchData = async (url) => {
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
      return (
        <Box sx={{
          width: 'calc(max(15%, 142px))',
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
          <ClickHelper />
        </Box>
      )
    }
  }

  useEffect(() => {
    (async () => {
      const res = await fetchData(initURL);
      res && setPokemonList(res.results);
    })()
  }, []);

  return (
    <Container disableGutters maxWidth='lg' sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: { xs: 2, md: 0 }
    }}>
      <Box sx={{
        width: '100%',
        height: { xs: '90vh', sm: 'calc(clamp(min(384px, 100vh), 75vh, 584px))' },
        color: 'text.primary',
        fontWeight: 'Regular',
      }}>
        <Container disableGutters maxWidth='md' sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}>
          <Grid container sx={{
            height: '100%',
          }}>
            <Grid item xs={12}>
              <Header title={title} />
            </Grid>
            <Grid item container sx={{
              height: { xs: '100%', sm: 'calc(clamp(300px, 75vh - 54px, 500px))' },
              mt: { xs: '24px', md: '54px' },
            }}>
              <Grid item xs={12} sm={6} sx={{
                alignItems: 'center',
                height: { xs: 'auto', md: '100%' },
                display: 'flex',
                justifyContent: 'center',
              }}>
                {displayPokemonList()}
              </Grid>
              <Grid item xs={12} sm={6} sx={{
                height: { xs: '40vh', sm: '100%' },
                bgcolor: '#000',
                p: { xs: '14px', md: '44px 44px 16px 44px' },
                mt: { xs: '24px', sm: 0 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {displayDefinition()}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box >
    </Container >
  );
};