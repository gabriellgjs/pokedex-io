import { Box, Card, CardHeader, CardBody, CardFooter, Image, Button } from "@chakra-ui/react";
import { ModalPokemon } from "./ModalPokemon";
import { TypePokemon } from "./TypePokemon";
import { Link, useParams} from 'react-router-dom';
import Router  from "../router";

interface PokeCardProps {
  name?: string;
  sprites?: string;
  types?: string[]
}

export function PokeCard(props: PokeCardProps) {
  return(
    <Link to={`/${props.name}`}>
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
            <Router />
        </CardHeader>
        <CardBody textTransform={"capitalize"}  textColor={'white'}>
          {props.name}
        </CardBody>
        <CardFooter>
            <TypePokemon
              types={props.types}
              />
        </CardFooter>
      </Card>
              </Link>
  )
}