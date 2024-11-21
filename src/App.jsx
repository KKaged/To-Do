import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [topic, setTopic] = useState("");
  const [items, setItems] = useState([]);
  function addTopic() {
    if (topic.length !== 0) {
      setItems([...items, topic]);
    }

    setTopic("");
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <Input
        placeholder={"Input your task"}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onButtonClick={addTopic} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                setItems(items.filter((_, i) => i !== index)); // Remove the item at the given index
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
