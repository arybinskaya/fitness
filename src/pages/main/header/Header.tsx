import React from "react";
import styles from "./Header.module.css";
import bodyImage from "../../../assests/young-woman-with-beautiful-body-and-measure-tape_1150-14452.avif";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Button className={styles.menuButton}></Button>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Советы</li>
            <li className={styles.menuItem}>Психология похудения</li>
            <li className={styles.menuItem}>Комплексы от отеков</li>
            <li className={styles.menuItem}>Тренировки</li>
          </ul>
        </nav>
        <h1>Все о красоте твоего тела</h1>
      </header>
      <div className={styles["main-image"]}>
        <img src={bodyImage} alt="Стройное тело" />
      </div>
    </>
  );
};

export default Header;
