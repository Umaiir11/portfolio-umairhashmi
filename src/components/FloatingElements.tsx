import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements: React.FC = () => {
  const codeSnippets = [
    '{ flutter: clean_architecture }',
    'class LayerX extends Architecture',
    'await ApiService.call()',
    'MVVM + GetX = 🚀',
    'FastAPI → Flutter',
    '60FPS animations',
    'layerx_generator: ^2.0.0',
    'GetX.find<Controller>()',
    'SharedPreferencesHelper',
    'HttpsService.post()',
    'JsonExtractor.parse()',
    'flutter_screenutil',
    'Repository Pattern',
    'Clean Code SOLID'
  ];

  const geometricShapes = [
    { shape: 'circle', size: 'w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3' },
    { shape: 'square', size: 'w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2' },
    { shape: 'triangle', size: 'w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4' },
    { shape: 'diamond', size: 'w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-dev-accent-blue/20 dark:text-dev-accent-blue/30 whitespace-nowrap"
          initial={{ 
            x: -200,
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{
            x: (typeof window !== 'undefined' ? window.innerWidth : 1200) + 200,
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            opacity: [0, 0.7, 0.7, 0],
            rotate: Math.random() * 360 + 180
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "linear"
          }}
        >
          {snippet}
        </motion.div>
      ))}
      
      {/* Floating Geometric Shapes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute ${geometricShapes[i % geometricShapes.length].size} opacity-20`}
          style={{
            background: `linear-gradient(${Math.random() * 360}deg, #3b82f6, #10b981, #8b5cf6)`,
            borderRadius: geometricShapes[i % geometricShapes.length].shape === 'circle' ? '50%' : 
                         geometricShapes[i % geometricShapes.length].shape === 'diamond' ? '0' : '4px',
            transform: geometricShapes[i % geometricShapes.length].shape === 'diamond' ? 'rotate(45deg)' : 'none'
          }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: 0
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: [0, 1, 1.5, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsing Dots Grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-dev-accent-blue rounded-full"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 20}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, ${['#3b82f6', '#10b981', '#8b5cf6', '#f97316', '#ef4444'][i]}, transparent)`
          }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
};