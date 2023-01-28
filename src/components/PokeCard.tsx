import { Box, Card, CardHeader, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { TypePokemon } from "./TypePokemon";

export function PokeCard() {
  return(
      <Card border={"1px solid"}h={"auto"} w={"10rem"}>
        <CardHeader display={"flex"}>Bulbasaur #001</CardHeader>
        <CardBody>
          <Image boxSize={"100px"}
          src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"}/>
        </CardBody>
        <CardFooter>
          <TypePokemon
            type1="Grass"
            type2="Poison"
          />
        </CardFooter>
      </Card>
  )
}