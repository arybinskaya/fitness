import React from "react";
import ListItem from "./ListItem";
import { ListItems } from "./interfaceList";
import Card from "../../../components/UI/Card";
import styles from "./List.module.css";

const LIST_HEALTHY: ListItems[] = [
  {
    id: 1,
    name: "Советы",
    description:
      "Здесь ты узнаешь что нужно делать перед тем, как начать стройнеть и оздаравливать свое тело",
  },
  {
    id: 2,
    name: "Психология похудения",
    description:
      "В этом разделе мы обсудим причины появления лишнего веса и проработаем их",
  },
  {
    id: 3,
    name: "А может это не жир? Комплексы от оттеков",
    description:
      "Данный раздел посвящен борьбе с оттеками, которые маскируются под лишний вес",
  },
  {
    id: 4,
    name: "Тренировки",
    description:
      "Здесь ты найдешь действенные и не сложные тренировки для своего тела",
  },
];

const List = () => {
  const list = LIST_HEALTHY.map((item) => (
    <ListItem key={item.id} name={item.name} description={item.description} />
  ));

  return (
    <section className={styles.list}>
      <Card>
        <ul>{list}</ul>
      </Card>
    </section>
  );
};
export default List;
