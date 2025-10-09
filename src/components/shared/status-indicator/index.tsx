'use client';

import { motion } from 'motion/react';

const StatusIndicator = () => {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '14px',
          height: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Pulsing outer ring */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            position: 'absolute',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.2)',
          }}
        />

        {/* Main dot */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>

      <span
        style={{
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        Available
      </span>
    </div>
  );
};

export default StatusIndicator;
