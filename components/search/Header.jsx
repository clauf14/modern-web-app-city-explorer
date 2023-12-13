import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Header(){
    return(
        <>
        <Link href="/">
            <Button m={5} leftIcon={<MdOutlineArrowBackIos />} colorScheme='teal' variant='solid'>
                Back to Home Page
            </Button>
        </Link>
        </>
    )
    
}