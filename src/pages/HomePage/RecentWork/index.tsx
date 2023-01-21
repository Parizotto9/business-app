import HeaderSection from "../../../components/HeaderSection";
import {
  Flex,
  Text,
  Card,
  Circle,
  Heading,
  Image,
  IconButton,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import style from "./RecentWork.module.scss";
import { BsBorderBottom } from "react-icons/bs";

export default function RecentWork() {
  return (
    <Flex alignContent="center" direction="column" py="100px">
      <HeaderSection
        title="Our Recent Works"
        boxTxt="Our Portfolio"
        subTitle=""
      ></HeaderSection>

      <Tabs variant="enclosed">
        <TabList fontWeight="bold" justifyContent="center" border="none">
          <Tab className={style.tab} _selected={{ color: "#155bd5" }}>
            ALL WORK
          </Tab>
          <Tab
            className={style.tab}
            _selected={{ color: "#155bd5" }}
            color="#6d6d6d"
          >
            BRANDING
          </Tab>
          <Tab
            className={style.tab}
            _selected={{ color: "#155bd5" }}
            color="#6d6d6d"
          >
            MARKETING
          </Tab>
          <Tab
            className={style.tab}
            _selected={{ color: "#155bd5" }}
            color="#6d6d6d"
          >
            PLANNING
          </Tab>
          <Tab
            className={style.tab}
            _selected={{ color: "#155bd5" }}
            color="#6d6d6d"
          >
            RESEARCH
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
}
