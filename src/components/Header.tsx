import { Box } from "@chakra-ui/react";
import { HeaderLogo } from "./HeaderLogo";


export function Header() {
  return (
    <Box 
      w={"100vw"} 
      h={"12rem"} 
      pl={"2rem"}
      pr={"2rem"}
      display={"flex"} 
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"} justifyItems={"center"}>
        <HeaderLogo />
      </Box>       
    </Box>
  )
}