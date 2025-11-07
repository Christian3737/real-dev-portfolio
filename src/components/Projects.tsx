import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectVidracaria from "@/assets/project-vidracaria.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

/* Seção de projetos */
const Projects = () => {
  const projects = [
    {
      title: "Site para Vidraçaria",
      description: "Website institucional moderno desenvolvido para empresa de vidraçaria, com galeria de produtos, formulário de contato e design responsivo.",
      image: projectVidracaria,
      link: "#",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Landing Page Moderna",
      description: "Landing page com design arrojado, animações suaves e alta taxa de conversão. Foco em UX e performance.",
      image: projectLanding,
      link: "#",
      tags: ["React", "Tailwind", "Animações"],
    },
    {
      title: "Portfólio Pessoal",
      description: "Portfólio criativo com tema dark/light, seções interativas e otimizado para SEO.",
      image: projectPortfolio,
      link: "#",
      tags: ["React", "TypeScript", "UI/UX"],
    },
  ];

  return (
    <section id="projetos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-up group bg-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/5"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
