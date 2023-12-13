import { Box, Button, Flex } from "@chakra-ui/react"

import Search from "../../components/search/Search"
import List from "@/components/search/List"
import Header from "../../components/search/Header"

export default function Page(){
    return ( 
    <>
        <Header />
        <Search />
    </>
    )
}