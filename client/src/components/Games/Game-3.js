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
    "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg?t=1625363925";
  
  export default function ProductSimple() {
    return (
      <Link href="https://store.steampowered.com/app/367520/Hollow_Knight/" >
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
              Hollow Knight
            </Heading>
          </Stack>
        </Box>
      </Flex>
      </Link>
    );
  }