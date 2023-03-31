import HeaderSection from "../../../components/HeaderSection";
import {
  Flex,
  Text,
  Circle,
  Heading,
  Image,
  IconButton,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import Card2 from "./Card2";
import style from "./RecentWork.module.scss";
import { BsBorderBottom } from "react-icons/bs";
import { useState, useEffect } from "react";
import { pf1, pf2, pf3, pf4, pf5, pf6 } from "../../../assets/portfolio";
import Card from "./Card2";

interface newList {}
/* interface Card {
  title: string;
  subtitle: string;
  filtro: "STRING";
  img: any;
} */

export default function RecentWork() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = ["ALL WORK", "BRANDING", "MARKETING", "PLANNING", "RESEARCH"];

  const [newList, setNewList]: any = useState([]);

  const lista = [
    {
      title: "Graphics Design",
      subtitle:
        "Short description for the ones who look for something new. Awesome!",
      img: pf1,
      filtro: "BRANDING",
    },
    {
      title: "Web Development",
      subtitle:
        "Short description for the ones who look for something new. Awesome!",
      img: pf2,
      filtro: "RESEARCH",
    },
    {
      title: "App Development",
      subtitle:
        "Short description for the ones who look for something new. Awesome!",
      img: pf3,
      filtro: "MARKETING",
    },
    {
      title: "Digital Marketing",
      subtitle:
        "Short description for the ones who look for something new. Awesome!",
      img: pf4,
      filtro: "PLANNING",
    },
    {
      title: "SEO Services",
      subtitle:
        "Short description for the ones who look for something new. Awesome!",
      img: pf5,
      filtro: "BRANDING",
    },
    {
      title: "Product Design",
      subtitle:
        "Short description for the ones who look for something new. Awesome!",
      img: pf6,
      filtro: "MARKETING",
    },
  ];

  //Vai ter tipo que vai ser usado para filtrar, imagem, titulo e subtitulo
  useEffect(() => {
    const novaLista = lista.filter((item) => {
      if (tabIndex === 0) return true;
      else {
        return tabs[tabIndex] === item.filtro;
      }
    });
    setNewList(novaLista);
    console.log(novaLista);
  }, [tabIndex]);

  return (
    <Flex alignContent="center" direction="column" py="100px">
      <HeaderSection
        title="Our Recent Works"
        boxTxt="Our Portfolio"
        subTitle=""
      ></HeaderSection>

      <Tabs onChange={(index) => setTabIndex(index)} variant="enclosed">
        <TabList
          id="tabList"
          fontWeight="bold"
          justifyContent="center"
          border="none"
        >
          {tabs.map((tab, ind) => {
            return (
              <Tab
                className={`${style.tab}  ${
                  ind === tabIndex ? style.tabSelected : ""
                }`}
                color="gray.500"
                _selected={{ color: "#155bd5" }}
              >
                {tab}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
      <Flex justify="center" wrap="wrap" mt="12">
        {newList.map((card: any) => {
          return <Card2 {...card} />;
        })}
      </Flex>
    </Flex>
  );
}
