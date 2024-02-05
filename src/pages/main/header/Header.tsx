import React from "react";
import styles from "./Header.module.css";
import bodyImage from "../../../assests/young-woman-with-beautiful-body-and-measure-tape_1150-14452.avif";
import Menu from "../../../layout/Menu";

const Header = () => {
  const menuItems = [
    { label: "Главная", link: "/home" },
    { label: "Советы", link: "/advice" },
    { label: "От отеков", link: "/exercise" },
    { label: "Психология", link: "/psycholody" },
    { label: "Упражнения", link: "/workout" },
  ];
  return (
    <>
      <header className={styles.header}>
        <h1>Все о красоте твоего тела</h1>
        <Menu items={menuItems} />
      </header>
      <div className={styles["main-image"]}>
        <img src={bodyImage} alt="Стройное тело" />
      </div>
    </>
  );
};

export default Header;
