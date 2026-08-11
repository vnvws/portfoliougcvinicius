import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress immediately
    const duration = 1700;
    const intervalTime = 16; // ~60fps for smoothness
    const increment = (100 / (duration / intervalTime));
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bone grain h-[100dvh]"
          style={{ touchAction: 'none' }}
        >
          <div className="relative flex flex-col items-center max-w-[280px] w-full px-6">
            {/* Favicon / Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="w-20 h-20 bg-ink rounded-2xl flex items-center justify-center neon-edge relative overflow-hidden group">
                <span className="text-bone font-display text-3xl font-black tracking-tighter">
                  V<span className="text-neon">.</span>A
                </span>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-center mb-8"
            >
              <h1 className="text-ink font-display text-xl font-bold tracking-tight uppercase">
                Vinícius Araújo
              </h1>
              <p className="text-ink/60 font-display text-[10px] tracking-[0.2em] uppercase mt-1">
                Estúdio Criativo UGC
              </p>
            </motion.div>

            {/* Progress Container */}
            <div className="w-full h-[2px] bg-ink/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-neon"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "tween", ease: "linear", duration: 0.016 }}
              />
            </div>
            
            {/* Progress Percentage */}
            <div className="mt-3 flex justify-between w-full font-display text-[10px] text-ink/40 font-medium tabular-nums uppercase tracking-widest">
              <span>Loading experience</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-10 text-[100px] font-display font-black text-ink/[0.02] select-none pointer-events-none uppercase leading-none hidden sm:block">
            Vinícius<br/>Araújo
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

