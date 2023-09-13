import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import newsImage from "../images/news.avif";
export default function NewsItem(props) {
  const { title, image_url, desciption, date, link, category } = props;

  return (
    <Center py={6}>
      <Box
        maxW={"350px"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"}  mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            src={image_url}
            objectFit="fill"
            fallbackSrc={newsImage}
            alt="Example"
          />
        </Box>
        <Stack justify="space-evenly">
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {category.map((element) => {
              return element + " ";
            })}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {date}
          </Text>
          <Text color={"gray.500"}>{desciption}</Text>
          <Button colorScheme="blue">
            <Link href={link} target="_blank">
              {" "}
              Read more{" "}
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
