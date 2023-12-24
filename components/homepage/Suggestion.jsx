"use client"
import { useEffect, useState } from "react";
import Loading from "../city/Loading";
import SuggestionTable from "./SuggestionTable";

let generatedIds = [];
const generateRandomId = () => {
  const validIds = [2950159, 5128581, 5368361, 2988507, 683844,
      2643743, 1850147, 2511174, 3451190, 683506, 1816670];

  let newId;

  do {
      const randomIndex = Math.floor(Math.random() * validIds.length);
      newId = validIds[randomIndex];
  } while (generatedIds.includes(newId));

  generatedIds.push(newId);

  return newId;
};

const fetchCityData = async (id) => {
  try {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/get?id=${id}`);
    if (!response.ok) {
      // console.error('Error fetching geocoding data');
      return null;
    }
    const data = await response.json();
    return data || {};
  } catch (error) {
    console.error('Error during geocoding or weather data:', error);
    return null;
  }
};

export default function Suggestion(){
  const [cityData, setCityData] = useState([]);;
  const [validId, setValidId] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const generateAndFetchData = async () => {
      const validIds = [];
      let attempts = 0;

      while (validIds.length < 5 && attempts < 10) {
        const randomId = generateRandomId();
        const data = await fetchCityData(randomId);

        if (data) {
          validIds.push(randomId);
        }

        attempts += 1;
      }

      // Now you have an array of 5 valid IDs in the `validIds` array
      console.log('Valid IDs:', validIds);
      setValidId(validIds)

      setIsLoading(false);
    };

    generateAndFetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  useEffect(() => {
    const fetchDataForValidIds = async () => {
      try {
        const dataPromises = validId.map(async (id) => {
          const cityData = await fetchCityData(id);
          return { id, data: cityData };
        });
  
        const resolvedData = await Promise.all(dataPromises);
        setCityData(resolvedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    if (validId.length > 0) {
      fetchDataForValidIds();
    }

    console.log(cityData);
  
  }, [validId]);

  if(isLoading){
    return <Loading />
  }

  return (
    <SuggestionTable cityData={cityData} />
  );
};
