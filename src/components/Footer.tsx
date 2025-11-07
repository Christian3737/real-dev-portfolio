import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* Rodapé do site */
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="bg-card border-t border-border/50 py-12" ref={ref}>
      <div className="container mx-auto px-6 text-center space-y-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-foreground/80 font-medium"
        >
          © 2025 Christian Izidoro — Desenvolvedor Front-End
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-muted-foreground italic font-['Dancing_Script',cursive]"
        >
          Desenvolvido por Christian Izidoro
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
