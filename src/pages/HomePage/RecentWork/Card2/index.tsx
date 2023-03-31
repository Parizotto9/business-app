import {
  Flex,
  Text,
  Circle,
  Card,
  Heading,
  Image,
  IconButton,
} from "@chakra-ui/react";

interface Card {
  title: string;
  subtitle: string;
  filtro: "STRING";
  img: any;
}

export default function Card2(card: Card) {
  return (
    <Card maxW="416px" shadow="none" m="3">
      <Image w="416px" borderRadius="lg" src={card.img}></Image>
      <Text fontWeight="semibold" my="2" fontSize="2xl">
        {card.title}
      </Text>
      <Text>{card.subtitle}</Text>
    </Card>
  );
}
