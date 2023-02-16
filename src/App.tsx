import { Box, ChakraProvider, Stack } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { SummaryPokes } from './components/SummaryPokes'

function App() {
  return (
     <>
      <ChakraProvider>
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


