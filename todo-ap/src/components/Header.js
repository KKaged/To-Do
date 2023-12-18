import React from "react";
import InputForm from "./InputForm";

const titles = ["Get things done!", "What's for today?", "Let's do it!"];

export default function Header() {
  const randNum = Math.floor(Math.random() * titles.length);
  const desc = titles[randNum];

  return (
    <header>
      <h1>{desc}</h1>
      <InputForm />
    </header>
  );
}
