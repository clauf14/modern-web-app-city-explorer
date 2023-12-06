'use client'
import { Box, Button, Flex, Heading, Input, Link, List, ListItem} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'



export default function Search(){

    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState(null);

    const [geoData, setGeoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5`);
            console.log(city)
            
            if (!response.ok) {
              // Handle error if needed
              console.error('Error fetching geocoding data');
              return;
            }
    
            const data = await response.json();
            console.log(data.results);

            setGeoData(data.results || []);

          } catch (error) {
            console.error('Error during geocoding:', error);
          }
        };
    
        if (city) {
            fetchData();
        }

      }, [city]);


    const handleSubmit = () => {
        setCity(inputValue);
        console.log('Form submitted with city:', inputValue);
    };

    return (
        <Flex height="70vh" align="center" justify="center">
            <Box textAlign="center">
                <Heading m={5}>Welcome to the search page!</Heading>
                <Box>
                <Input
                    type='text'
                    placeholder="Search your city..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button leftIcon={<MdOutlineSearch />} colorScheme="teal" mt={2} onClick={handleSubmit}>
                    Search
                </Button>
                </Box>
                <Heading>{city}</Heading>
                <Table size="md" variant="striped" colorScheme='teal' mt={4}>
                    <Thead>
                        <Tr>
                        <Th>Name</Th>
                        <Th>Population</Th>
                        <Th>Country</Th>
                        <Th>Elevation</Th>
                        <Th>City ID</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {geoData.map((item, index) => (
                        <Tr key={index}>
                            <Link href={`/city/${item.id}`} passHref>
                                <Td>{item.name}</Td>
                            </Link>
                            <Td>{item.population}</Td>
                            <Td>{item.country}</Td>
                            <Td>{item.elevation}m</Td>
                            <Td>{item.id}</Td>
                        </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    );
}