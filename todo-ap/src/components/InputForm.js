import { useState } from "react";
import { ListItems } from "@/DATA";

export default function InputForm() {
  const [currentValue, setValue] = useState("");
  const addToList = (e) => {
    e.preventDefault();
    console.log(currentValue);
    ListItems.push(currentValue);
    console.log(ListItems);
  };
  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addToList}>Add</button>
    </form>
  );
}
