import {
    Box,
    Center,
    Flex,
    useColorModeValue,
    Heading,
    Link,
    Text,
    Stack,
    Image,
  } from "@chakra-ui/react";
  
  const IMAGE =
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fa0RDkAlCec0STeMNAhPaF89q6U.jpg";
  
  export default function ProductSimple() {
    return (
      <Link href="https://www.themoviedb.org/movie/7345-there-will-be-blood?language=en-US" >
      <Flex py={12}>
        <Box
          position={"relative"}
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              There Will Be Blood
            </Heading>
          </Stack>
        </Box>
      </Flex>
      </Link>
    );
  }