import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react"
import { api } from "../lib/axios"
import { PokeCard } from "./PokeCard";

interface PokemonProps {
  poke: number | string;
  limit?: number;
  offset?: number;
}

type PokeApiResponse ={

}

type PokesListResponse ={
  results: {
    name: string
  }[]
}


export function SummaryPokes({limit= 150, offset = 0, poke}: PokemonProps) {
  const [pokemon, setPokemon] = useState<{  name: string;
    sprites: {
      front_default: string;
    }}[]>([]);
  const [pokemonsList, setPokemonsList] = useState<PokesListResponse>()

  useEffect(() =>{
    api.get(`pokemon?limit=${limit}&offset=${offset}`)
    .then(response =>  setPokemonsList(response.data)
    )
  },[])

  useEffect(()=> {
    pokemonsList?.results.map((name) => {
      api.get(`pokemon/${name.name}`).then(response => {
        setPokemon(prev => [...prev, response.data])
      })
    })
  }, [pokemonsList])


  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={0}>
      {
        pokemon && pokemon.map((pokemon, index) => (
          <PokeCard 
            key={index}
            name={pokemon.name}
            sprites={pokemon.sprites.front_default}
          />
        ))
      }
    </Grid>
  )
}