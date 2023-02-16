import { Badge, Box } from "@chakra-ui/react";

interface TypePokemonProps {
  types?: string[]
}[]

export function TypePokemon({types}: TypePokemonProps) {

  return(
    <Box >
      {
        types && types.map((type, index) => (
          <Badge key={index} bg={"gray.200"} textTransform={'capitalize'}>
            {type}
          </Badge>
        )
  
        )
      }
    </Box>
  )
}