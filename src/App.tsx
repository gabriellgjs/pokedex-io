import { ChakraProvider, Stack } from '@chakra-ui/react'
import { PokeCard } from './components/PokeCard'

function App() {

  return (
     <>
    <ChakraProvider>
      <Stack flexDirection={"row"}>
        <PokeCard />
      </Stack>
    </ChakraProvider>    
     </>
  )
}

export default App
