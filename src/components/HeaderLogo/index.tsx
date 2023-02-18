import { Box, Image } from "@chakra-ui/react";
import pokemonLogo from "../../assets/pokemon.svg"

export function HeaderLogo() {
  return (
    <Box w={"12.5rem"} h={"12.5rem"} display={"flex"} alignItems={"center"} justifyItems={"center"}>
      <Image 
        src={pokemonLogo}
      />
    </Box>
  )
}