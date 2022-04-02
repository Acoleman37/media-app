import React, { useState } from "react";
import {
  Image,
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  useColorModeValue,
  VStack,
  Grid,
  GridItem,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Game01 from "../Games/Game-1"
import Game02 from "../Games/Game-2"
import Game03 from "../Games/Game-3"
import Game04 from "../Games/Game-4"
import Movie01 from "../Movies/Movie-1"
import Movie02 from "../Movies/Movie-2"
import Movie03 from "../Movies/Movie-3"
import Movie04 from "../Movies/Movie-4"


const UserImage = ({ pic, name }) => (
  <Image src={pic || "https://bit.ly/dan-abramov"} alt={name} boxSize={200} />
);

function Profile() {

const [userInfo, setUserInfo] = useState({ name: "John Doe" });

  return (
    <Flex id="profile-container" justifyContent={{ base: "flex-end" }}>
      <VStack
        w="100%"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={50}
        align="stretch"
      >
        <HStack w="75%" justify="center" p={3} spacing={{ base: "0", md: "6" }}>
                  <Avatar
                    mr={3}
                    size={"lg"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <Flex direction="column" >
                    <Heading>Justina Doe</Heading>
                    <Text>About Me</Text>
                  </Flex>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" direction="column" h="400px" bg="white">
            <Heading mb={4} fontSize="4xl">Games</Heading>
            <HStack w="75%" justify="center">
              <Game01 game={{name:"Hellblade:Senua's Sacrifice", id:"001"}}/>
              <Spacer />
              <Game02 game={{name:"Ghost of Tsushima", id:"002"}}/>
              <Spacer />
              <Game03 game={{name:"Hollow Knight", id:"003"}}/>
              <Spacer />
              <Game04 game={{name:"Elden Ring", id:"004"}} />
            </HStack>
          </Box>
        </HStack>

        <HStack p={3}>
          <Box w="100%" align="center" h="300px" bg="White">
            <Heading mb={4} fontSize="4xl">Movies</Heading>
            <HStack w="75%" justify="center">
              <Movie01 movie={{name:"There Will Be Blood", id:"001"}}/>
              <Spacer/>
              <Movie02 movie={{name:"Princess Mononoke", id:"002"}} />
              <Spacer/>
              <Movie03 movie={{name:"Pulp Fiction", id:"003"}} />
              <Spacer/>
              <Movie04 movie={{name:"Ratatouille", id:"004"}} />
            </HStack>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Profile;