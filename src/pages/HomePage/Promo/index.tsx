import {
  Flex,
  Text,
  Card,
  Circle,
  Heading,
  Image,
  IconButton,
} from "@chakra-ui/react";
import img from "../../../assets/video-bg.png";
import { CiPlay1 } from "react-icons/ci";

export default function Promo() {
  return (
    <Flex bg="#fafafa" direction="column" alignItems="center" py="100px">
      <Text
        px="30px"
        py="8px"
        borderWidth="2px"
        borderColor="#155bd5"
        borderRadius="full"
        fontSize="14px"
        mb="15px"
        color="#155bd5"
        fontWeight="medium"
      >
        Our Intro Video
      </Text>
      <Heading fontSize="36px" mb="15px">
        Watch Our Promo Video
      </Heading>
      <Text pb="50px" color="#6d6d6d" align="center">
        There are many variations of passages of Lorem Ipsum available, but
        <br /> the majority have suffered alteration in some form.
      </Text>
      <Flex pos="relative" justifyContent="center" alignItems="center" px="5%">
        <Image src={img}></Image>
        <IconButton
          pos="absolute"
          color="white"
          size="lg"
          bg="#155bd5"
          style={{ scale: "1.8" }}
          aria-label="Play"
          _hover={{ bg: "white", color: "#155bd5" }}
          transition=".5s"
          isRound={true}
          icon={<CiPlay1 />}
        />
      </Flex>
    </Flex>
  );
}
