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
            {t("Sobre", "About")}{" "}
            <span className="gradient-text">{t("Mim", "Me")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 hover:shadow-glow transition-shadow duration-300"
        >
          <p className="text-lg leading-relaxed text-center text-muted-foreground whitespace-pre-line">
            {t(
              "Olá! Meu nome é Christian Izidoro, sou um desenvolvedor web apaixonado por transformar ideias em experiências digitais modernas, criativas e funcionais. Trabalho com criação de sites e landing pages responsivas, utilizando tecnologias como HTML, CSS, JavaScript e React. Busco sempre entregar interfaces limpas, rápidas e intuitivas, que unam design e tecnologia de forma harmônica.\nAcredito que cada projeto é uma oportunidade de contar uma história e causar impacto visual e emocional através do código.\nAtualmente, estou em busca de novas oportunidades para aprimorar minhas habilidades, colaborar com equipes criativas e desenvolver soluções inovadoras que gerem resultados reais.\nFora do código, gosto de música, academia e explorar novas ideias de design — porque criatividade também vem de viver novas experiências.",
              "Hello! My name is Christian Izidoro, and I’m a web developer passionate about transforming ideas into modern, creative, and functional digital experiences. I work with the creation of responsive websites and landing pages, using technologies such as HTML, CSS, JavaScript, and React. I always strive to deliver clean, fast, and intuitive interfaces that combine design and technology in a harmonious way.\nI believe that every project is an opportunity to tell a story and create visual and emotional impact through code.\nCurrently, I’m seeking new opportunities to enhance my skills, collaborate with creative teams, and develop innovative solutions that generate real results.\nOutside of coding, I enjoy music, working out, and exploring new design ideas — because creativity also comes from living new experiences."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
