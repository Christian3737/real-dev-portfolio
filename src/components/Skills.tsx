import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Counter = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return <motion.span>{rounded}</motion.span>;
};

/* Seção de habilidades técnicas com ícones das tecnologias */
const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { 
      name: "HTML5", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 95
    },
    { 
      name: "CSS3", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 90
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 85
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 80
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 75
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 85
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {t("Minhas", "My")} <span className="gradient-text">{t("Habilidades", "Skills")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-primary min-w-[3ch]">
                      <Counter value={skill.level} isInView={isInView} />%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
