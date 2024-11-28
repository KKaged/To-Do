import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Intro = ({ onClick }) => {
  const [counter, setCounter] = useState(5); // Countdown timer
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0); // Index for topics
  const [isVisible, setIsVisible] = useState(true); // Visibility for fade effect

  const topics = [
    { topic: "Study", id: 1 },
    { topic: "Work", id: 2 },
    { topic: "Meditate", id: 3 },
    { topic: "Pray", id: 4 },
    { topic: "Recite", id: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter - 1;
        if (newCounter <= 0) {
          // Trigger fade-out before changing the topic
          setIsVisible(false);
          setTimeout(() => {
            setCurrentTopicIndex(
              (prevIndex) => (prevIndex + 1) % topics.length
            ); // Update topic
            setIsVisible(true); // Fade back in
          }, 500); // Match fade-out duration
          return 5; // Reset counter
        }
        return newCounter;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, [topics.length]);

  return (
    <motion.div
      className="bg-green-600 w-full h-screen flex justify-center flex-col items-center gap-2"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 3, delay: 1 }}
        animate={{ opacity: 1 }}
        className="text-white font-semibold text-5xl"
      >
        ‏اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ‎
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 3, delay: 3 }}
        animate={{ opacity: 1 }}
        className="text-white font-semibold text-5xl flex flex-col items-center gap-4"
      >
        <motion.h2>
          <motion.span
            key={currentTopicIndex} // Key ensures re-render on topic change
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to {topics[currentTopicIndex]?.topic || "Start"}?
          </motion.span>
        </motion.h2>
        <motion.button
          className="border-2 shadow-2xl w-32 h-16 text-2xl font-bold rounded-lg"
          transition={{ type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
        >
          YES
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
