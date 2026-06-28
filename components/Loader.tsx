"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a minimum display time for the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712] overflow-hidden"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold font-jetbrains-mono tracking-tighter"
            >
              <span className="text-white">Aditya</span>
              <span className="text-accent">.</span>
            </motion.div>
            
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="h-[2px] bg-accent/30 mt-6 rounded-full relative overflow-hidden w-full max-w-[200px]"
            >
              <motion.div 
                className="absolute inset-y-0 left-0 bg-accent"
                initial={{ x: "-100%", width: "100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
