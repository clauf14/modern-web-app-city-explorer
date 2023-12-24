import { Box, Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";


export default function SuggestionTable({ cityData }){
    return (
        <Box>
            <Heading mt={10} size="md">Top destinations in {new Date().getFullYear()}:</Heading>
            <Table size="md" variant="simple" colorScheme="teal" mt={4}>
            <Thead>
                <Tr>
                <Th>Name</Th>
                <Th>Population</Th>
                <Th>Country</Th>
                <Th>Elevation</Th>
                <Th>City ID</Th>
                </Tr>
            </Thead>
            <Tbody>
                {cityData.map((item, index) => (
                <Tr key={index}>
                    <Td>
                        <Link href={`/city/${item.id}`}>{item.data.name}</Link>
                    </Td>
                    <Td>{item.data.population}</Td>
                    <Td>{item.data.country}</Td>
                    <Td>{item.data.elevation}m</Td>
                    <Td>{item.id}</Td>
                </Tr>
                ))}
            </Tbody>
            </Table>
        </Box>
    )
}