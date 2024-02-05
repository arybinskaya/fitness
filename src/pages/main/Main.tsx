import React from "react";
import Header from "./header/Header";
import ShortInfo from "./shortInfo/ShortInfo";
import List from "./list/List";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <ShortInfo />
        <List />
      </main>
    </>
  );
};

export default Main;
