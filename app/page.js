import { Box, Center, Flex} from "@chakra-ui/react"
import Header from '../components/homepage/Header'
import Buttons from '../components/homepage/Buttons'
import Suggestion from '../components/homepage/Suggestion'
import connectMongoDB from "@/libs/mongodb"

export default async function Home() {
  await connectMongoDB()

  return (
    <Flex  height="100vh" // Set the height of the container to the full viewport height
    alignItems="center" // Center vertically
    justifyContent="center" // Center horizontally>
    >
      <Box>
        <Center>
          <Header />
        </Center>
        <Center>
          <Buttons />
        </Center>
        <Center>
          <Suggestion />
        </Center>
      </Box>
    </Flex>
  )
}
