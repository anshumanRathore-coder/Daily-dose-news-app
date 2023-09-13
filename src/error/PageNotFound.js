import React from "react";
import errorImage from "../images/no_results_found.png";
import { Box, Center, Image } from "@chakra-ui/react";
export default function PageNotFound() {
  return (
    <>
      <Box width="100%">
      <Center marginTop="2em">
        <Image height="25rem" src={errorImage} alt="image not found" />
      </Center>
      </Box>

    </>
  );
}
