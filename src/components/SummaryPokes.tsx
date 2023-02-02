import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { LoadMore } from "./LoadMore";
import { PokeCard } from "./PokeCard";



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
  next: string;
  results: {
    name: string
  }[]
}


export function SummaryPokes() {
  const maxSpritesAvaible = 905;
  const limit = 20;
  const [offSet, setOffSet] = useState<number>(0);
  const [buttonLoadMoreMore, setButtonLoadMore] = useState(true)
  const [pokemons, setPokemons] = useState<PokeApiResponse>([]);
  const [pokemonsList, setPokemonsList] = useState<PokesListResponse>()

  useEffect(() =>{
    api.get(`pokemon?limit=${limit}&offset=${offSet}`)
    .then((response) =>  {
      setPokemonsList(response.data)
      setOffSet(offSet + 20)
    }
    )
  },[])

  useEffect(()=> {
    pokemonsList?.results.map((_name) => {
       api.get(`pokemon/${_name.name}`).then(response => {
        setPokemons(prev => [...prev, response.data])
      })
    })
  }, [pokemonsList])

  function handleNewsPokemons() {
    const newOffset = offSet + 20
    setOffSet(newOffset <= maxSpritesAvaible ? newOffset : maxSpritesAvaible);
      api.get(`pokemon?limit=${limit}&offset=${offSet}`)
      .then((response) =>  {
        setPokemonsList(response.data)
      })
  }

  return (
    <Box margin={'auto'}>
      <Grid  mt={5} templateColumns='repeat(4, 1fr)' gap={5}>
        {
          pokemons && pokemons.map((_, index) => {
            if(index+1 > maxSpritesAvaible) {
              return;
            }
            const pokeIndex = pokemons.find(pokemon => pokemon.id === index+1)           
            const types = pokeIndex?.types.map(type => type.type.name)
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

     { offSet <= 901 && <LoadMore LoadMorePokemons={handleNewsPokemons}/>} 
    </Box>
  )
}