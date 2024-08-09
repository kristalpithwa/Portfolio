import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="flex items-center justify-center rounded-full border-4 border-white border-opacity-50 h-24 w-24"
        style={{ borderColor: "#b3138c", borderTopColor: "#00b0ff" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-12 w-12 rounded-full bg-white"></div>
      </motion.div>
    </div>
  );
};

export default Loader;
