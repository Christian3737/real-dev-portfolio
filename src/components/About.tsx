import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* Seção sobre mim */
const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {t("Sobre", "About")} <span className="gradient-text">{t("Mim", "Me")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 hover:shadow-glow transition-shadow duration-300"
        >
          <p className="text-lg text-foreground/90 leading-relaxed">
            {t(
              "Sou um desenvolvedor Front-End apaixonado por criar interfaces modernas, responsivas e com atenção a cada detalhe. Busco uma oportunidade CLT para aplicar meus conhecimentos e crescer profissionalmente na área de tecnologia, contribuindo com soluções reais que façam a diferença.",
              "I am a Front-End developer passionate about creating modern, responsive interfaces with attention to every detail. I am looking for a full-time opportunity to apply my knowledge and grow professionally in the technology field, contributing with real solutions that make a difference."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
