import { Box, Flex} from "@chakra-ui/react"
import Header from './components/homepage/Header'
import Buttons from './components/homepage/Buttons'

export default function Home() {
  return (
    <Flex height="100vh" align="center" justify="center">
      <Box align="center">
        <Header />
        <Buttons />
      </Box>
    </Flex>
  )
}
