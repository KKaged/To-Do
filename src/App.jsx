import Input from "./components/Input";
import Button from "./components/Button";
import Intro from "./components/Intro";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  const [topic, setTopic] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true);
  function addTopic() {
    if (topic.length !== 0) {
      setItems([...items, topic]);
    }

    setTopic("");
  }
  return (
    <>
      <AnimatePresence>
        {show && (
          <Intro
            onClick={() => setShow(false)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        )}
      </AnimatePresence>

      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <Input
        placeholder={"Input your task"}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onButtonClick={addTopic} />
      <ul className="flex flex-col ">
        {items.map((item, index) => (
          <motion.li
            className="flex gap-2"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {item}
            <button
              className="text-red-800 border"
              onClick={() => {
                setItems(items.filter((_, i) => i !== index)); // Remove the item at the given index
              }}
            >
              Delete
            </button>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

export default App;
