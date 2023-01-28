import { Box, Button, Input } from "@chakra-ui/react";

export function FindInput() {
  return (
    <Box display={"flex"} w={"18rem"}>
      <Input 
        borderColor={"gray.500"} 
        pl={"1.25rem"}
        placeholder='Busque um Pokémon' 
        focusBorderColor="gray.300"
        textColor={"gray.100"}
        autoFocus={false}
      />
    </Box>
  )
}