import { Badge, Text } from "@chakra-ui/react";
import { useState } from "react";

interface TypePokemonProps {
  type1: string;
  type2?: string | undefined;
}

export function TypePokemon({type1, type2}: TypePokemonProps) {
  const [typeOne, setType1] = useState<string>(type1);
  const [typeTwo, setType2] = useState<string | undefined>(type2);

  function pokeType(typeOne: string, typeTwo: string | undefined) {
    if(typeOne && typeTwo) {
      return `${typeOne} ${typeTwo}`
    }
    return typeOne
  }

  return(
    <Badge>
      {pokeType(typeOne, typeTwo)}
    </Badge>
  )
}