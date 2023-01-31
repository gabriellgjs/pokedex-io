import { Badge, Text } from "@chakra-ui/react";
import { useState } from "react";

interface TypePokemonProps {
  type1:  string;
  type2: string | null;
}[]

export function TypePokemon(props: TypePokemonProps) {
  const [typeOne, setType1] = useState(props.type1);
  const [typeTwo, setType2] = useState(props.type2 ?? null);

  function pokeType(typeOne: string, typeTwo: string | null) {
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