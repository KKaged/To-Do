"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Title from "@/components/Header";
import InputForm from "@/components/InputForm";
import Button from "@/components/Button";
import ListGroup from "@/components/ListGroup";
import React from "react";
import { ListItems } from "@/DATA";

export default function Home() {
  const [currentValue, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const test = () => {
    console.log(currentValue);
  };

  return (
    <main className={styles.main}>
      <header>
        <Title />
        <form>
          <InputForm value={currentValue} onChange={handleChange} />
          <Button text={"Add"} pressed={test} />
        </form>
        <ListGroup />
      </header>
    </main>
  );
}
