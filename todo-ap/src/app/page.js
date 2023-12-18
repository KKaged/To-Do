"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
