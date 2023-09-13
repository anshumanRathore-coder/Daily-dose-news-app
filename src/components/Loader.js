import { Box, Center, Spinner } from "@chakra-ui/react";
export default function Loader() {
  return (
    <Box width="100%">
    <Center>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      mt="2em"
      size="xl"
    />
    </Center>
    </Box>
  );
}
