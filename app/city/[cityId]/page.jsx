"use client"
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
const { fetchWeatherApi } = require('openmeteo');
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function CityDetails( {params} ){

    const id = params.cityId

    const [cityData, setCityData] = useState({})

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/get?id=${id}`);
    
            if (!response.ok) {
              // Handle error if needed
              console.error('Error fetching geocoding data');
              return;
            }
    
            const data = await response.json();
            console.log("City Data:" + JSON.stringify(data));
    
            setCityData(data || {});
    
            // Once city data is available, fetch weather data
            
            // const lat = data.latitude
            // console.log(lat)
            // const long = data.longitude
            // console.log(long)

            // const params = {
            //     "latitude": lat,
	        //     "longitude": long,
            //     "hourly": "temperature_2m"
            //   };
              
            //   // Specify the API endpoint URL
            //   const url = "https://api.open-meteo.com/v1/forecast";
              
            //   // Make the weather API request and store the responses
            //   const responses = await fetchWeatherApi(url, params);
              
            //   // Helper function to form time ranges
            //   const range = (start, stop, step) =>
            //     Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
              
            //   // Process the first location. Add a for-loop for multiple locations or weather models
            //   const response1 = responses[0];
              
            //   // Extract attributes for timezone and location
            //   const utcOffsetSeconds = response1.utcOffsetSeconds();
            //   const timezone = response1.timezone();
            //   const timezoneAbbreviation = response1.timezoneAbbreviation();
            //   const latitude = response1.latitude();
            //   const longitude = response1.longitude();
              
            //   const hourly = response1.hourly();
              
            //   // Note: The order of weather variables in the URL query and the indices below need to match!
            //   const weatherData = {
            //     hourly: {
            //       time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
            //         (t) => new Date((t + utcOffsetSeconds) * 1000)
            //       ),
            //       temperature2m: hourly.variables(0).valuesArray(),
            //     },
            //   };
              
            //   // `weatherData` now contains a simple structure with arrays for datetime and weather data
            //   for (let i = 0; i < weatherData.hourly.time.length; i++) {
            //     console.log(
            //       weatherData.hourly.time[i].toISOString(),
            //       weatherData.hourly.temperature2m[i]
            //     );
            //   }
            
    
            const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,cloud_cover,visibility`);
    
            if (!weatherResponse.ok) {
              console.error('Error fetching weather data');
              return;
            }

            const data1 = await weatherResponse.json();
            console.log("Weather Data:" + JSON.stringify(data1));

            setWeatherData(data1);

          } catch (error) {
            console.error('Error during geocoding or weather data:', error);
          }
        };
    
        fetchData();
      }, [id]);

    return (
        <div>
            <Link href="/">
            <Button m={5} leftIcon={<MdOutlineArrowBackIos />} colorScheme='teal' variant='solid'>
                Back to Home Page
            </Button>
            </Link>
            <Heading m={5}>{"The city is " + cityData.name + " with id:" + id}</Heading>
            <Box m={5} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
                <Box as="h2" fontSize="xl" fontWeight="semibold" mb="2">
                    {cityData.name}, {cityData.country}
                </Box>
                <Box>
                    <strong>Population:</strong> {cityData.population}
                </Box>
                <Box>
                    <strong>Latitude:</strong> {cityData.latitude}, <strong>Longitude:</strong> {cityData.longitude}
                </Box>
                <Box>
                    <strong>Timezone:</strong> {cityData.timezone}
                </Box>
                {/* Add more information as needed */}
            </Box>
            <Text m={5}>City Data as JSON:{JSON.stringify(cityData)}</Text>
            <Text m={5}>Weather Data as JSON:{JSON.stringify(weatherData)}</Text>
        </div>
    )
    
}