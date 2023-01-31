import { Box, ChakraProvider, DarkMode, keyframes, Stack } from '@chakra-ui/react'
import { FindInput } from './components/FindInput'
import { Header } from './components/Header'
import { PokeCard } from './components/PokeCard'
import { SummaryPokes } from './components/SummaryPokes'

function App() {


  return (
     <>
    <ChakraProvider>
    <Box h={"100vh"} w="scren">
      <Header />
    <Stack>
      <SummaryPokes poke={50}/>
    </Stack>
    </Box>
    </ChakraProvider>    
     </>
  )
}

export default App


