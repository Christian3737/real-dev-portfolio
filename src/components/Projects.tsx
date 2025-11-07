import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import projectVidracaria from "@/assets/project-vidracaria.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

/* Seção de projetos com animações */
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Site para Vidraçaria",
      description: "Website moderno para empresa de vidros e espelhos",
      image: projectVidracaria,
      link: "#",
    },
    {
      title: "Landing Page",
      description: "Landing page responsiva com design clean",
      image: projectLanding,
      link: "#",
    },
    {
      title: "Portfólio Pessoal",
      description: "Portfólio profissional e interativo",
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
            Meus <span className="gradient-text">Projetos</span>
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
                    Ver Projeto
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
