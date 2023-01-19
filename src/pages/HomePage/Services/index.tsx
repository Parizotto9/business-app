import { Flex, Text, Card, Circle, Heading } from "@chakra-ui/react";
import { TbPill } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { TfiShortcode, TfiDashboard, TfiReload } from "react-icons/tfi";
import { IoLayersOutline } from "react-icons/io5";
import style from "./Services.module.scss";

export default function Services() {
  const cards = [
    {
      title: "Refreshing Design",
      subtitle:
        "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
      icon: <TbPill />,
    },
    {
      title: "Solid Bootstrap 5",
      subtitle:
        "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
      icon: <BsBootstrap />,
    },
    {
      title: "100+ Components",
      subtitle:
        "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
      icon: <TfiShortcode />,
    },
    {
      title: "Speed Optimized",
      subtitle:
        "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
      icon: <TfiDashboard />,
    },
    {
      title: "Fully Customizable",
      subtitle:
        "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
      icon: <IoLayersOutline />,
    },
    {
      title: "Regular Updates",
      subtitle:
        "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
      icon: <TfiReload />,
    },
  ];
  return (
    <Flex direction="column" alignItems="center" py="100px">
      <Text
        px="30px"
        py="8px"
        borderWidth="2px"
        borderColor="#155bd5"
        borderRadius="full"
        fontSize="14px"
        mb="15px"
        color="#155bd5"
      >
        Services
      </Text>
      <Heading fontSize="36px" mb="15px">
        Our Best Services
      </Heading>
      <Text pb="50px" color="#6d6d6d" align="center">
        There are many variations of passages of Lorem Ipsum available, but
        <br /> the majority have suffered alteration in some form.
      </Text>
      <Flex
        css={{
          flexFlow: "row wrap",
        }}
        justifyContent="center"
      >
        {cards.map((card, ind) => (
          <Card
            className={style.card}
            mx="12px"
            w="30%"
            px="30px"
            py="40px"
            mb="30px"
            key={ind}
            alignContent="start"
            transition=".4s"
            _hover={{ boxShadow: "xl" }}
          >
            <Circle
              className={style.icon}
              borderWidth="2px"
              borderColor="#155bd5"
              color="#155bd5"
              size="78px"
              fontSize="40px"
              mb="25px"
            >
              {card.icon}
            </Circle>
            <Heading size="md" mb="20px">
              {card.title}
            </Heading>
            <Text color="#6d6d6d">{card.subtitle}</Text>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
