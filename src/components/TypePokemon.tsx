import { Badge, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface TypePokemonProps {
  types?: string[]
}[]

export function TypePokemon({types}: TypePokemonProps) {

  return(
    <Box>
      {
        types && types.map(type => (
          <Badge>
            {type}
          </Badge>
        )
  
        )
      }
    </Box>
  )
}