import React from "react";
import errorImage from "../images/errorImage.png";
import { Center, Image,Box } from "@chakra-ui/react";
export default function SomethigWentWrong() {
  return (
    <>
    <Box width="100%">
      <Center>
        <Image  src={errorImage} alt="image not found" />
      </Center>
      </Box>
    </>
  );
}
