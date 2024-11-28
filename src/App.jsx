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
  const [displayCity, setDisplayCity] = useState(""); // Correct initialization
  const [prayerTimes, setPrayerTimes] = useState(null);

  const prayer_time_api = "https://api.aladhan.com/v1/timingsByCity";

  // Add a task to the to-do list
  function addTopic() {
    if (topic.length !== 0) {
      setItems([...items, topic]);
    }
    setTopic("");
  }

  // Fetch prayer times
  const fetchPrayerTimes = async () => {
    if (city) {
      try {
        const response = await axios.get(prayer_time_api, {
          params: { city, country: "" },
        });
        if (response.data.code === 200) {
          setPrayerTimes(response.data.data.timings);
          setDisplayCity(city); // Update displayCity only when fetching is successful
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
        <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-900 text-white px-6 py-8">
          <Live_Clock />

          {/* To-Do List Section */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6 shadow-lg border border-green-300 text-black">
            <h2 className="text-2xl font-semibold text-green-700 text-center mb-4">
              To-Do List
            </h2>
            <p className="text-center text-gray-600 italic text-sm">
              "Indeed, Allah does not burden a soul beyond that it can bear"
              (Quran 2:286)
            </p>
            <div className="mt-6">
              <Input
                placeholder={"Enter a task (e.g., Salah, Quran recitation)"}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="border-green-600 border-2 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-200"
              />
              <Button
                onButtonClick={addTopic}
                text={"Add Task"}
                className="mt-4 w-full bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg py-2 hover:opacity-90"
              />
            </div>
            <ul className="flex flex-col mt-4 space-y-2">
              {items.map((item, index) => (
                <motion.li
                  className="flex items-center justify-between bg-white text-black p-3 rounded-lg shadow-md border-l-4 border-green-600 hover:bg-green-50 transition duration-150"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span>{item}</span>
                  <button
                    className="text-white bg-red-600 rounded-lg px-4 py-1 hover:bg-red-700 transition"
                    onClick={() =>
                      setItems(items.filter((_, i) => i !== index))
                    }
                  >
                    Delete
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Prayer Times Section */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6 shadow-lg border border-green-300 text-black">
            <h2 className="text-2xl font-semibold text-green-700 text-center mb-4">
              Prayer Times
            </h2>
            <div className="flex gap-4 items-center">
              <Input
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border-green-600 border-2 rounded-lg p-2 w-full"
              />
              <Button
                onButtonClick={fetchPrayerTimes}
                text="Get Prayer Times"
                className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg px-6 py-2 hover:opacity-90"
              />
            </div>
            {prayerTimes && (
              <div className="mt-6">
                <h2 className="text-lg font-bold text-center mb-4">
                  Prayer Times for {displayCity}
                </h2>
                <ul className="space-y-2">
                  {Object.entries(prayerTimes)
                    .filter(
                      ([prayer]) =>
                        ![
                          "Imsak",
                          "Midnight",
                          "Firstthird",
                          "Lastthird",
                        ].includes(prayer)
                    )
                    .map(([prayer, time]) => (
                      <li
                        key={prayer}
                        className="flex justify-between p-2 bg-white rounded-lg shadow text-black"
                      >
                        <span className="font-medium">{prayer}</span>
                        <span>{time}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
