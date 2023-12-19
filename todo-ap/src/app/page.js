import { useState } from "react";
import styles from "./page.module.css";
import Title from "@/components/Header";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";
import ListGroup from "@/components/ListGroup";
import React from "react";

export default function Home() {
  const [currentValue, setValue] = useState("");

  const test = (e) => {
    console.log("test");
    e.preventDefault();
    // Additional logic for form submission can be added here
  };

  return (
    <main className={styles.main}>
      <header>
        <Title />
        <form onSubmit={test}>
          <InputForm
            value={currentValue}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button text={"Add"} onClick={test} />
        </form>
        <ListGroup />
      </header>
    </main>
  );
}
