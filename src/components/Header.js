//import chakra ui
import {
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Stack,
  Flex,
  Icon,
  useToast,
} from "@chakra-ui/react";
//import react-icons
import { BsGlobe2 } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
//import react hooks
// import { useState } from "react";

export default function Header({dispatch,updateSearch}) {
  //using hooks
  const toast = useToast();
  // const [inputSearch, setInputSearch] = useState("");
  // functions
  const handleLangaugeSelectChange = (event) => {
    dispatch({ type: "language", value: event.target.value });
  };
  const handleCountrySelectChange = (event) => {
    dispatch({ type: "country", value: event.target.value });
  };
  const handleInputChange = (event) => {
    // setInputSearch(event.target.value);
  };
  const handleSearchButton = () => {
      toast({
        title: "Seach option is not present right now",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
  };
  
  return (
    <>
      <Box bgColor="#d7defa" height="7rem" color="white">
        <Box as="header">
          <Stack
            height="7rem"
            direction="row"
            justify="space-around"
            align="center"
            wrap="wrap"
          >
            <InputGroup width="20em">
              <Input onChange={handleInputChange} placeholder="Search news" bgColor="white" color="black" />
              <InputRightAddon
                bgColor="#5e82f4"
                as="button"
                children="Search"
                onClick={handleSearchButton}
              ></InputRightAddon>
            </InputGroup>
            <Flex>
              <Icon as={BsGlobe2} color="black" mt="10px" mr="5px" boxSize={6} />
              <Select
                width="8em"
                color="black"
                onChange={handleCountrySelectChange}
                bgColor="white"
                placeholder="Country"
              >
                <option value="af">Afganistan</option>
                <option value="ar">Argentina</option>
                <option value="aus">Austarlia</option>
                <option value="bd">Bangladesh</option>
                <option value="ca">Canada</option>
                <option value="cn">China</option>
                <option value="de">Germany</option>
                <option value="in">India</option>
                <option value="nz">New zealand</option>
                <option value="pk">Pakistan</option>
                <option value="ph">Phillipens</option>
                <option value="kr">South korea</option>
                <option value="es">Spanin</option>
                <option value="la">Sri lanka</option>
                <option value="th">Thailand</option>
                <option value="uk">United kingdom</option>
                <option value="us">USA</option>
              </Select>
            </Flex>
            <Flex>
              <Icon  as={IoLanguageOutline} color="black" mt="10px" mr="5px" boxSize={6} />
              <Select
                width="8em"
                color="black"
                onChange={handleLangaugeSelectChange}
                bgColor="white"
                placeholder="Language"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="jp">Japaneese</option>
                <option value="ru">Russian</option>
                <option value="pa">Punjabi</option>
              </Select>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
