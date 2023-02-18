import { Card, CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";
import { TypePokemon } from "./TypePokemon";

interface PokeCardProps {
  name?: string;
  sprites?: string;
  types?: string[]
}

export function PokeCard(props: PokeCardProps) {
  return(
      <Card 
        display={"flex"} 
        justifyItems={'center'} 
        alignItems={'center'} 
        border={"1px solid"} 
        h={"auto"} 
        w={"10rem"}
        bg={"gray.700"}
      > 
        <CardHeader>
                <Image boxSize={"100px"}
                src={props.sprites}
                />
        </CardHeader>
        <CardBody textTransform={"capitalize"}  textColor={'white'} fontSize={'1.25rem'} fontWeight={'bold'}>
          {props.name}
        </CardBody>
        <CardFooter>
            <TypePokemon
              types={props.types}
              />
        </CardFooter>
      </Card>
  )
}