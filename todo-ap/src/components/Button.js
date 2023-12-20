"use client";

export default function Button({ pressed, text }) {
  return (
    <button type="button" onClick={pressed}>
      {text}
    </button>
  );
}
