import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import { Header } from './components/Header'
import { SummaryPokes } from './components/SummaryPokemons'
import { theme } from './theme'

function App() {
  return (
     <>
      <ChakraProvider theme={theme}>
        <Box h={"100%"} w="screen"   bg={"blackAlpha.800"} overflowX={'hidden'}>
          <Header />
        <Stack>
          <SummaryPokes />
        </Stack>
        </Box>
      </ChakraProvider>    
     </>
  )
}

export default App


