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
  id: number;
  name: string;
  sprites: {
    front_default: string;
  }
  types: {
    slot: number;
    type: {
      name: string;
    }
  }[]
}[]

type PokesListResponse ={
  results: {
    name: string
  }[]
}


export function SummaryPokes({limit= 20, offset = 0, poke}: PokemonProps) {
  const [pokemons, setPokemons] = useState<PokeApiResponse>([]);
  const [pokemonsList, setPokemonsList] = useState<PokesListResponse>()

  useEffect(() =>{
    api.get(`pokemon?limit=${limit}&offset=${offset}`)
    .then((response) =>  {
      setPokemonsList(response.data)
    }
    )
  },[])

  useEffect(()=> {
    pokemonsList?.results.map((_name, index) => {
       api.get(`pokemon/${_name.name}`).then(response => {
        setPokemons(prev => [...prev, response.data])
      })
    })
  }, [pokemonsList])


  return (
    <Grid margin={'auto'} mt={5} templateColumns='repeat(4, 1fr)' gap={5}>
      {
        pokemons && pokemons.map((_, index) => {
          const pokeIndex = pokemons.find(pokemon => pokemon.id === index+1)

          const types = pokeIndex?.types.map(type => type.type.name)
          console.log(types)
            return (
              <PokeCard 
                key={index}
                name={pokeIndex?.name}
                sprites={pokeIndex?.sprites.front_default}
                types={types}
              />
            )
        })
      }
    </Grid>
  )
}