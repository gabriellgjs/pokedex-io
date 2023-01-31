import { Box, Card, CardHeader, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { TypePokemon } from "./TypePokemon";

interface PokeCardProps {
  name: string;
  sprites: string;
}

export function PokeCard(props: PokeCardProps) {
  return(
      <Card border={"1px solid"} h={"auto"} w={"10rem"}>
        <CardHeader display={"flex"}>{props.name}</CardHeader>
        <CardBody>
          <Image boxSize={"100px"}
          src={props.sprites}/>
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
  )
}