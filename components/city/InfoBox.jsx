import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function InfoBox( {cityData, weatherData, id} ){
    
    const [sunrise, setSunrise] = useState("")
    const [sunset, setSunset] = useState("")

    useEffect(() => {
        if (weatherData.sys) {
          const sunriseDate = new Date(weatherData.sys.sunrise * 1000); // Convert Unix timestamp to milliseconds
          const sunsetDate = new Date(weatherData.sys.sunset * 1000);
    
          const sunriseTime = sunriseDate.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute: '2-digit'});
          const sunsetTime = sunsetDate.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute: '2-digit'});
    
          setSunrise(sunriseTime);
          setSunset(sunsetTime);
        }
      }, [weatherData]);
    
    return (
        <div>

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
            <Box as="h2" fontSize="xl" fontWeight="semibold" mb="2" mt="5">
                <strong>Weather</strong>
            </Box>
            <Box>
                <strong>State of weather:</strong> {weatherData.weather[0].main}
            </Box>
            <Box>
                <strong>Weather's description:</strong> {weatherData.weather[0].description}
            </Box>
            <Box>
                <strong>Temperature:</strong> {Math.round(weatherData.main.temp) + '°C'}, <strong>Feels Like:</strong> {Math.round(weatherData.main.feels_like) + '°C'}
            </Box>
            <Box>
                <strong>Humidity:</strong> {weatherData.main.humidity + '%'}
            </Box>
            <Box>
                <strong>Wind:</strong> {weatherData.wind.speed + " km/h"}
            </Box>
            <Box>
                <strong>Sunrise:</strong> {sunrise}
            </Box>
            <Box>
                <strong>Sunset:</strong> {sunset}
            </Box>
        </Box>

    </div>
    )
}