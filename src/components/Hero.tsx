import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/foto.jpg";

/* Seção hero com apresentação principal */
const Hero = () => {
  const scrollToProjetos = () => {
    const element = document.querySelector("#projetos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Foto de perfil */}
          <div className="fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Christian Gabriel Izidoro Nascimento"
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/20 shadow-card"
              />
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="fade-up delay-100">
              <h1 className="text-4xl lg:text-6xl font-bold mb-2">
                Christian Gabriel <br />
                <span className="gradient-text">Izidoro Nascimento</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Dev Front-End
              </p>
            </div>

            <p className="fade-up delay-200 text-lg lg:text-xl text-foreground/80 max-w-2xl">
              Transformando ideias em interfaces modernas e funcionais.
            </p>

            <div className="fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToProjetos}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/30 hover:bg-primary/5"
              >
                <a href="/curriculo.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Currículo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
