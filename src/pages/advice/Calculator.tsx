import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const changeHeightHandler = (event: any) => {
    setHeight(event.target.value);
  };
  const changeWeightHandler = (event: any) => {
    setWeight(event.target.value);
  };
  const changeAgeHandler = (event: any) => {
    setAge(event.target.value);
  };
  const countCalories = ({
    height,
    weight,
    age,
  }: {
    height: number;
    weight: number;
    age: number;
  }) => {
    setResult(665 + 9.56 * weight + 1.85 * height - 4.68 * age);
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={() => countCalories({ height, weight, age })}
      >
        <TextField
          label="Введите свой рост"
          type="number"
          onChange={changeHeightHandler}
        />
        <TextField
          label="Введите свой вес"
          type="number"
          onChange={changeWeightHandler}
        />
        <TextField
          label="Введите свой возраст"
          type="number"
          onChange={changeAgeHandler}
        />
        <Button
          onClick={() => countCalories({ height, weight, age })}
          sx={{
            fontSize: 20,
            margin: 0.5,
            backgroundColor: "#FF8C00",
            color: "#000000",
          }}
        >
          Вычислить
        </Button>

        <div className={styles.result}>
          {result && <p>{result.toFixed(2)} калорий</p>}
        </div>
      </form>
    </>
  );
};

export default Calculator;
