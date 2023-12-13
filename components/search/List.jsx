import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Link,
  } from '@chakra-ui/react'

export default function List({ geoData }){
    return (
    <Table size="md" variant="striped" colorScheme='teal' mt={4}>
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
            {geoData.map((item, index) => (
            <Tr key={index}>
                <Td>
                    <Link href={`/city/${item.id}`}>{item.name}</Link>
                </Td>
                <Td>{item.population}</Td>
                <Td>{item.country}</Td>
                <Td>{item.elevation}m</Td>
                <Td>{item.id}</Td>
            </Tr>
            ))}
        </Tbody>
    </Table>
    )
}