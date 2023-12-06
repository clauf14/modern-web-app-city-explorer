import { Button, Stack, Link } from '@chakra-ui/react'
import { MdOutlineSearch } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineHouse } from "react-icons/md";

export default function Butons(){
    return (
        <>
            <Stack direction='row'm={5} spacing={4} align='center'>
            <Link href="/city">
                <Button leftIcon={<MdOutlineHouse />} colorScheme='teal' variant='solid'>
                City Page
                </Button>
            </Link>

            <Link href="/favourites">
                <Button leftIcon={<MdFavoriteBorder />} colorScheme='teal' variant='outline'>
                Favourites Page
                </Button>
            </Link>

            <Link href="/search">
                <Button leftIcon={<MdOutlineSearch />} colorScheme='teal' variant='solid'>
                Search Page
                </Button>
            </Link>
            </Stack>
        </>  
    )  
}