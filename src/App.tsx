import { Box, ChakraProvider, DarkMode, keyframes, Stack } from '@chakra-ui/react'
import { FindInput } from './components/FindInput'
import { Header } from './components/Header'
import { PokeCard } from './components/PokeCard'

function App() {

  return (
     <>
    <ChakraProvider>
    <Box h={"100vh"} w="scren">
      <Header />
    </Box>
    </ChakraProvider>    
     </>
  )
}

export default App


