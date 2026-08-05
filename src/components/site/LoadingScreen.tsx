import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30); // ~1.5s for progress bar to reach 100

    // Force hide after 1.7s
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bone grain"
        >
          <div className="relative flex flex-col items-center max-w-[280px] w-full px-6">
            {/* Favicon / Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="w-20 h-20 bg-ink rounded-2xl flex items-center justify-center neon-edge relative overflow-hidden group">
                <span className="text-bone font-display text-3xl font-black tracking-tighter">
                  V<span className="text-neon">.</span>A
                </span>
                
                {/* Subtle shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-ink font-display text-xl font-bold tracking-tight uppercase">
                Vinícius Araújo
              </h1>
              <p className="text-ink/60 font-display text-[10px] tracking-[0.2em] uppercase mt-1">
                UGC Creative Studio
              </p>
            </motion.div>

            {/* Progress Container */}
            <div className="w-full h-[2px] bg-ink/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-neon"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            {/* Progress Percentage */}
            <div className="mt-3 flex justify-between w-full font-display text-[10px] text-ink/40 font-medium tabular-nums uppercase tracking-widest">
              <span>Loading experience</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute bottom-10 left-10 text-[100px] font-display font-black text-ink/[0.02] select-none pointer-events-none uppercase leading-none">
            Vinícius<br/>Araújo
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
