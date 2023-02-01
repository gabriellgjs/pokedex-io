import { Box, Card, CardHeader, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { TypePokemon } from "./TypePokemon";

interface PokeCardProps {
  name?: string;
  sprites?: string;
  types?: string[]
}

export function PokeCard(props: PokeCardProps) {
  return(
      <Card display={"flex"} justifyItems={'center'} alignItems={'center'} border={"1px solid"} h={"auto"} w={"10rem"}
      bg={"gray.700"}
      >
        <CardHeader textTransform={"capitalize"}  textColor={'white'}>
          {props.name}
        </CardHeader>
        <CardBody>
          <Image boxSize={"100px"}
          src={props.sprites}/>
        </CardBody>
        <CardFooter>
            <TypePokemon
              types={props.types}
            />
        </CardFooter>
      </Card>
  )
}