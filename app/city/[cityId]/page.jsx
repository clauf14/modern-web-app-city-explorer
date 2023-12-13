"use client"
import { useState, useEffect } from "react";

import Loading from "../../../components/city/Loading";
import Buttons from "../../../components/city/Buttons";
import InfoBox from "../../../components/city/InfoBox";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function CityDetails( {params} ){

    const id = params.cityId
    const [cityData, setCityData] = useState({})
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/get?id=${id}`);
    
            if (!response.ok) {
              console.error('Error fetching geocoding data');
              return (
                <Heading m={5}>{"The city with id:" + id + " doesn't exist!"}</Heading>
              )
            }
    
            const data = await response.json();
            setCityData(data || {});

            const API_key = 'c9cf16cde00c379ccabe168a37cf9c5c'
            const lat = data.latitude
            const lon = data.longitude

            const weatherResponse = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)

            if (!weatherResponse.ok) {
              // Handle error if needed
              console.error('Error fetching geocoding data');
              return;
            }
    
            const data1 = await weatherResponse.json();
            console.log(data1)
    
            setWeatherData(data1 || {});

            setTimeout(() => {
                setIsLoading(false);
              }, 500);

          } catch (error) {
            console.error('Error during geocoding or weather data:', error);
          }
        };
    
        fetchData();

      }, [id])

    

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <Buttons cityData={cityData} />
            <InfoBox cityData={cityData} weatherData={weatherData} id={id}/>
            <Link m={5} href="/favourites">Go to favourites page!</Link>
        </div>
    )
    
}