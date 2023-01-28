import { Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Text } from "@chakra-ui/react";
import { Link } from "phosphor-react";
import { FindInput } from "./FindInput";
import { HeaderLogo } from "./HeaderLogo";


export function Header() {
  return (
    <Box 
      bg={"blackAlpha.800"} 
      w={"100vw"} 
      h={"12rem"} 
      pl={"2rem"}
      pr={"2rem"}
      display={"flex"} 
      justifyContent={"space-between"}
      alignItems={"center"}
    >

      <Box display={"flex"} alignItems={"center"} justifyItems={"center"}>
        <HeaderLogo />
      </Box>  

      <Box display={"flex"}  alignItems={"center"} justifyItems={"center"}>
      <FindInput />
      </Box>

    </Box>
  )
}