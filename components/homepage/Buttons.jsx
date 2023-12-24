import { Button, Stack, Link } from '@chakra-ui/react'
import { MdOutlineSearch, MdFavoriteBorder } from "react-icons/md";

export default function Butons(){

    return (
        <>
            <Stack direction='row' spacing={4} align='center'>
                <Link href="/favourites">
                    <Button leftIcon={<MdFavoriteBorder />} colorScheme='red' variant='outline'>
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