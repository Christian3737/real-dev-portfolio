import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import projectVidracaria from "@/assets/project-vidracaria.jpg";
import projectHats from "@/assets/projectHats.png";
import projectPortfolio from "@/assets/project-portfolio.png";

/* Seção de projetos com animações */
const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
       {
      title: "Site para Vidraçaria",
      description: "Website moderno para empresa de vidros e espelhos. Apresenta os serviços, botão fixo para WhatsApp, galeria e layout totalmente responsivo.",
      image: projectVidracaria,
      link: "https://mellifluous-haupia-70d64b.netlify.app/",
    },

    {
    
  title: "Loja de Chapéus",
  description: "Landing page moderna e responsiva desenvolvida para uma loja de chapéus, com design elegante, animações suaves e integração com Instagram e WhatsApp.",
  image: projectHats, // nome da imagem que você vai importar
  link: "htr-hats.netlify.app", // coloca o link do site quando estiver hospedado
},

    {









    title: "Portfólio Pessoal",
    description: "Desenvolvi meu portfólio moderno e responsivo para apresentar minhas habilidades como desenvolvedor front-end. Inclui modo claro/escuro, animações com Framer Motion e troca de idioma (PT/EN).",
    image: projectPortfolio,
    link: "#",
    },
  ];







return (
    <section id="projetos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {t("Meus", "My")} <span className="gradient-text">{t("Projetos", "Projects")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {t("Ver Projeto", "View Project")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
