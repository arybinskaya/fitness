import React, { ReactNode } from "react";
import styles from "./Card.module.css";

type TypeProps = { children: ReactNode };

const Card = ({ children }: TypeProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
