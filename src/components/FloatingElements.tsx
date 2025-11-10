import { motion } from "framer-motion";

const FloatingElements = () => {
  const elements = [
    { size: 100, duration: 20, delay: 0, x: "10%", y: "20%" },
    { size: 150, duration: 25, delay: 2, x: "80%", y: "60%" },
    { size: 80, duration: 18, delay: 4, x: "60%", y: "80%" },
    { size: 120, duration: 22, delay: 1, x: "30%", y: "50%" },
    { size: 90, duration: 19, delay: 3, x: "75%", y: "25%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-primary/10 to-primary-glow/5 blur-3xl"
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
