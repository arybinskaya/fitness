import React, { useState, FC } from "react";
import { Button } from "@mui/material";
import styles from "./Promotext.module.css";
import Authorization from "../../authorization/Authorization";

const Promotext: React.FC = () => {
  const [toComeIn, setToComeIn] = useState<boolean>(false);

  const authClickHandler = () => {
    setToComeIn(true);
  };

  return (
    <section className={styles.promoText}>
      <h2>Подарок для твоего тела</h2>
      <p>Привет, меня зовут Александра, я помогу тебе добиться фигуры мечты.</p>
      <p>
        Если тебе надоели диеты, ограничении в питании, нет сил терпеть
        длительнные тренировки? Тогда тебе ко мне! Я помогу тебе сделать это
        осознанно и максимально комфортно!
      </p>
      {!toComeIn && (
        <Button
          onClick={authClickHandler}
          sx={{ backgroundColor: "#f83e3e", color: "white", fontSize: 30 }}
        >
          Войти
        </Button>
      )}
      {toComeIn && <Authorization />}
    </section>
  );
};

export default Promotext;
