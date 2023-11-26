import React from "react";
import styles from "./ListItem.module.css";

type TypeProps = { name: string; description: string };

const ListItem = ({ name, description }: TypeProps) => {
  return (
    <li className={styles.list}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
      </div>
    </li>
  );
};

export default ListItem;
