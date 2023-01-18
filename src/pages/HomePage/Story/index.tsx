import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import img from "../../../assets/about-img1.jpg";
import style from "./Story.module.scss";

export default function Story() {
  return (
    <Flex bg="#fafafa" justifyContent="center" py="120px">
      <Flex
        w="47%"
        px="12px"
        pos="relative"
        justifyContent="end"
        alignContent="center"
      >
        <Flex
          className={style.image}
          justifyContent="center"
          direction="column"
        >
          <Image src={img}></Image>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        px="12px"
        w="47%"
        direction="column"
        pl="50px"
      >
        <Text className={style.storyTitle} pl="30px" fontSize="lg">
          OUR STORY
        </Text>
        {/* DimunuirHeight da linha */}
        <Text className={style.storySubTitle} mt="20px" fontSize="36px" as="b">
          Our team comes with the experience and knowledge
        </Text>
        <Box mt="40px" bg="#EFEFEF" p="15px" borderRadius="lg">
          <Button bg="#155bd5" color="white">
            Who We Are
          </Button>
          <Button bg="white" mx="20px">
            Our Vision
          </Button>
          <Button bg="white">Our History</Button>
        </Box>
        <Text color="#6d6d6d" mt="30px" pb="20px">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, look like readable English.
        </Text>
        <Text color="#6d6d6d">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have in some form, by injected humour.
        </Text>
      </Flex>
    </Flex>
  );
}
