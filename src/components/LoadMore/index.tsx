import { Box, Button, Stack } from "@chakra-ui/react";
import { Plus } from "phosphor-react";

interface LoadMoreProps {
  LoadMorePokemons: () => void
}
export function LoadMore({LoadMorePokemons}: LoadMoreProps) {

  return (
    <Stack mt={25} display={'flex'} justifyItems={'center'} alignItems={'center'} mb={25}>
      <Button 
        leftIcon={<Plus  size={24}/>}
        onClick={LoadMorePokemons}
        bgColor={'blue.800'} 
        variant='solid' 
        textColor={'gray.100'}
        _hover={{
          bgColor: 'blue.900'
        }  
        }
      >
        Carregar mais
      </Button>
  </Stack>
  )
}