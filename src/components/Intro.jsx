import { motion } from "framer-motion";

const Intro = ({ onClick }) => {
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
        <h2>Ready to study?</h2>
        <motion.button
          className="border w-32 h-16 text-2xl"
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
