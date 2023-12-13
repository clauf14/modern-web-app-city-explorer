import { Box, Heading } from "@chakra-ui/react";

export default function InfoBox( {cityData, weatherData, id} ){
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
                <strong>Sunrise:</strong> {weatherData.sys.sunrise}
            </Box>
            <Box>
                <strong>Sunset:</strong> {weatherData.sys.sunset}
            </Box>
        </Box>

    </div>
    )
}