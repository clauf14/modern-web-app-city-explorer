import { Button, Link } from "@chakra-ui/react";
import { MdFavoriteBorder, MdFavorite, MdOutlineSearch } from "react-icons/md";
import { useState } from "react";

export default function Buttons( {cityData} ){

    const [icon, setIcon] = useState(<MdFavoriteBorder />)

    const addToFavourite = async (e) => {
        e.preventDefault()
        try {
            setIcon(<MdFavorite />)
            const res = await fetch("http://localhost:3000/city", {
                method: "POST",
                headers:{
                    "Content-type":  "apllication/json"
                },
                body: JSON.stringify({ 
                    name:cityData.name,
                    population:cityData.population,
                    country:cityData.country,
                    elevation:cityData.elevation,
                    cityId:cityData.id })
            })

            if(res.ok){
                alert("City added to favorites! Click on the button from the bottom of the page to see your favourite city/cities!")
            }
        } catch (error) {
            console.log(error)
        }

    }

    return <>
        <Link href="/search">
            <Button m={5} leftIcon={<MdOutlineSearch />} colorScheme='teal' variant='solid'>
                Back to Search
            </Button>
        </Link>
        <Link to="/">
            <Button
            type='submit' m={5} right="0" top="0" rightIcon={icon} position="fixed" colorScheme='red' variant='solid'
            onClick={addToFavourite}
            >
            Add to Favourites
            </Button>
        </Link>
    </>
}