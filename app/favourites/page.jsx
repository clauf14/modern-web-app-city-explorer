import { Box, Button, Heading } from "@chakra-ui/react";
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


    return (
        <>
            <Heading> 
                favourites page!
            </Heading>
            {cities.map((city) => (
              <Box m={5} key={city.cityId}> {/* Added a key to each rendered element */}
                  <Heading>{city.name}</Heading>
                  <h1>{city.population}</h1>
                  <Button mr={5}>
                    <Link href={`/city/${city.cityId}`}>Go to City</Link>
                  </Button>
                  <RemoveBtn id={city._id} />
              </Box>
            ))}
            <Button m={5}>
              <Link href="/">Go back to homepage</Link>
            </Button>
        </> 
    )
}