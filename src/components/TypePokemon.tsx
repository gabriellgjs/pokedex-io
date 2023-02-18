import { Badge, Box } from "@chakra-ui/react";

interface TypePokemonProps {
  types?: string[]
}[]

interface listColorProps {
  [key: string]: string;
}

export function TypePokemon({types}: TypePokemonProps) {
  const listColor: listColorProps = {
    'bug': "#729F3F",
    'dragon': "#F16E57",
    'fairy': "#FDB9E9",
    'fire': "#FD7D24",
    'ghost': "#7B62A3",
    'ground': "#AB9842",
    'normal': "#A4ACAF",
    'psychic': "#F366B9",
    'stell': "#A4A4A4",
    'dark': "#707070",
    'electric': "#EED535",
    'fighting': "#D56723",
    'flying': "#3DC7EF",
    'grass': "#9BCC50",
    'ice': "#51C4E7",
    'poison': "#B97FC9",
    'rock': "#A4A4A4",
    'water': "#4592C4"
  }

  return(
    <Box >
      {
        types && types.map((type, index) => (
            <Badge 
              key={index} 
              bg={listColor[type]} 
              textTransform={'capitalize'}
              ml={'0.5rem'}
              rounded={'md'}
              p={'1'}
            >
              {type}
            </Badge>
        ))
      }
    </Box>
  )
}