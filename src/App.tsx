import { Box, ChakraProvider, DarkMode, keyframes, Stack } from '@chakra-ui/react'
import { FindInput } from './components/FindInput'
import { Header } from './components/Header'
import { PokeCard } from './components/PokeCard'
import { SummaryPokes } from './components/SummaryPokes'
import { BrowserRouter  } from 'react-router-dom'

function App() {


  return (
     <>
     <BrowserRouter>
      <ChakraProvider>
        <Box h={"100%"} w="screen"   bg={"blackAlpha.800"} overflowX={'hidden'}>
          <Header />
        <Stack>
          <SummaryPokes />
        </Stack>
        </Box>
      </ChakraProvider>    
     </BrowserRouter>
     </>
  )
}

export default App


