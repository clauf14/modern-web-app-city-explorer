import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link"
import RemoveBtn from "../../components/favourites/RemoveBtn";

const getFavourites = async () => {
    try {
      const res = await fetch("http://localhost:3000/city", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("failed to fetch");
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error loading favorite cities: ", error);
    }
  };


  

export default async function Page(){

    const { cities } = await getFavourites();
            
          if(cities.length === 0){
            return ( 
            <>
              <Button m={5} colorScheme='teal'>
                <Link href="/">Go back to homepage</Link>
              </Button>
              <Heading m={5}>No favourite cities!</Heading>
              <Heading m={5}>Head to the search page and look for a favorite city!</Heading>
            </>  
          )} else {
            return <>
              <Button m={5} colorScheme='teal'>
                <Link href="/">Go back to homepage</Link>
              </Button>
              <Heading m={5}> 
                  Your favourite cities!
              </Heading>
              {cities.map((city) => (
              <Box m={5} key={city.cityId} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4"> {/* Added a key to each rendered element */}
                  <Heading size='md' >{city.name + ", " + city.country}</Heading>
                  <Text>{city.population}</Text>
                  <Button mr={5} colorScheme='teal'>
                    <Link href={`/city/${city.cityId}`}>Go to City</Link>
                  </Button>
                  <RemoveBtn id={city._id} />
              </Box>
              ))}
            </>
          }
}