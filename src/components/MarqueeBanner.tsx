import { motion } from 'framer-motion';

const MarqueeBanner = () => {
  const messages = [
    '🎵 QUALITÉ AUDIO PREMIUM',
    '⚡ LIVRAISON RAPIDE 24H',
    '🛡️ GARANTIE 2 ANS',
    '💫 TECHNOLOGIE DE POINTE',
    '🔊 SON IMMERSIF 3D',
    '🎧 CONFORT ULTIME'
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border/50">
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap py-4"
      >
        {[...messages, ...messages, ...messages].map((message, index) => (
          <span
            key={index}
            className="text-lg font-semibold text-foreground mx-8 flex-shrink-0"
          >
            {message}
          </span>
        ))}
      </motion.div>
      
      {/* Gradient edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default MarqueeBanner;