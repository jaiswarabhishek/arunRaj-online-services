import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Preloader = () => {
     const words = [
       {
         text: "ArunRaj ",
       },
       {
         text: "Online ",
       },
       {
         text: "Services",
       }
     ];
  return (
    <>
      <motion.div
        className="flex items-center justify-center h-screen "
        initial="hidden"
        animate="visible"
      >
        <img src="/logo.png" alt="ArunRaj" className="w-20" />
        <TypewriterEffectSmooth words={words} />
        {/* <h1 className="text-gray-900 font-bold text-2xl sm:hidden"> ArunRaj</h1> */}
      </motion.div>
    </>
  );
};

export default Preloader;