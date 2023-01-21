import { Box, Text, Heading, Flex } from "@chakra-ui/react";

interface Props {
  boxTxt: string;
  title: string;
  subTitle: string;
}

export default function HeaderSection({ boxTxt, title, subTitle }: Props) {
  return (
    <Flex direction="column" alignItems="center">
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
        {boxTxt}
      </Text>
      <Heading fontSize="36px" mb="15px">
        {title}
      </Heading>
      <Text pb="50px" color="#6d6d6d" align="center">
        There are many variations of passages of Lorem Ipsum available, but
        <br /> the majority have suffered alteration in some form.
      </Text>
    </Flex>
  );
}
