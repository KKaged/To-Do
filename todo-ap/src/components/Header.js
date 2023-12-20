"use client";

import React from "react";

const titles = ["Get things done!", "What's for today?", "Let's do it!"];

export default function Title() {
  const randNum = Math.floor(Math.random() * titles.length);
  const desc = titles[randNum];

  return <h1>{desc}</h1>;
}
