import { Box, Flex} from "@chakra-ui/react"
import Header from '../components/homepage/Header'
import Buttons from '../components/homepage/Buttons'
import connectMongoDB from "@/libs/mongodb"

export default async function Home() {
  await connectMongoDB()

  return (
    <Flex height="100vh" align="center" justify="center">
      <Box align="center">
        <Header />
        <Buttons />
      </Box>
    </Flex>
  )
}
