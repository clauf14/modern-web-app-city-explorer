import { Flex, Spinner } from "@chakra-ui/react";

export default function LoadingContainer({ children }) {
  return (
    <Flex
      align="center"
      justify="center"
      minHeight="50vh"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
      />
      {children}
    </Flex>
  );
}
