import style from "./Home.module.scss";
import { Flex, Box, Text, Button, IconButton, Image } from "@chakra-ui/react";
import { CiPlay1 } from "react-icons/ci";
import img from "../../../assets/hero-image.jpg";

export default function Home() {
  return (
    <Flex
      py="100px"
      alignItems="center"
      bg="#155bd5"
      justifyContent="center"
      direction={{ base: "row", md: "column", lg: "row" }}
    >
      <Flex direction="column" px="12px" w="47%" justifyContent="center">
        <Text className={style.title} fontSize="44px" as="b" color="white">
          Corporate & Business Site Template By Ayro UI.
        </Text>
        <Text fontSize="md" py="30px" color="whiteAlpha.600">
          We are a digital agency that helps brands to achieve their business
          outcomes. We see technology as a tool to create amazing things.
        </Text>
        <Flex alignItems="center">
          <Button bg="white" color="#155bd5">
            <Text as="b">GET STARTED</Text>
          </Button>
          <Flex alignItems="center">
            <IconButton
              bg="white"
              size="lg"
              mx="20px"
              color="#155bd5"
              aria-label="Play"
              isRound={true}
              icon={<CiPlay1 />}
            />
            <Text color="white" as="b">
              Watch Intro
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box w="47%" px="12px">
        <Image src={img} borderRadius="lg"></Image>
      </Box>
    </Flex>
  );
}
