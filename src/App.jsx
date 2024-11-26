import axios from "axios";
import Input from "./components/Input";
import Button from "./components/Button";
import Intro from "./components/Intro";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Live_Clock from "./components/Live_Clock";

function App() {
  const [topic, setTopic] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(true);
  const [city, setCity] = useState("");
  const [prayerTimes, setPrayerTimes] = useState(null);

  const prayer_time_api = "https://api.aladhan.com/v1/timingsByCity";

  // Add a task to the to-do list
  function addTopic() {
    if (topic.length !== 0) {
      setItems([...items, topic]);
    }
    setTopic("");
  }

  // Fetch prayer times using axios (city only)
  const fetchPrayerTimes = async () => {
    if (city) {
      try {
        const response = await axios.get(prayer_time_api, {
          params: {
            city,
            country: "", // Set country to an empty string if not provided
          },
        });
        if (response.data.code === 200) {
          setPrayerTimes(response.data.data.timings);
        } else {
          alert("Failed to fetch prayer times. Please check the city name.");
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        alert("An error occurred while fetching prayer times.");
      }
    } else {
      alert("Please enter a city.");
    }
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <Intro
            onClick={() => setShow(false)}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1 }}
          />
        )}
      </AnimatePresence>
      {!show && (
        <>
          <Live_Clock />

          {/* To-Do List Section */}
          <div className="mt-4">
            <h2 className="text-xl font-bold">To-Do List</h2>
            <Input
              placeholder={"Input your task"}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <Button onButtonClick={addTopic} text={"Add Task"} />
            <ul className="flex flex-col mt-4">
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
          </div>

          {/* Prayer Times Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">Prayer Times</h2>
            <div className="flex gap-4">
              <Input
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Button
                onButtonClick={fetchPrayerTimes}
                text="Get Prayer Times"
              />
            </div>
            {prayerTimes && (
              <div className="mt-4">
                <h2 className="text-2xl">Prayer Times for {city}</h2>
                <ul className="w-96">
                  {Object.entries(prayerTimes)
                    .filter(
                      ([prayer]) =>
                        ![
                          "Imsak",
                          "Midnight",
                          "Firstthird",
                          "Lastthird",
                        ].includes(prayer) // Filter out unwanted times
                    )
                    .map(([prayer, time]) => (
                      <li key={prayer} className="flex justify-between">
                        <span className="font-bold">{prayer}</span>
                        <span>{time}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;
