import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/foto.jpg";

/* Seção hero com apresentação principal - Layout moderno */
const Hero = () => {
  const scrollToProjetos = () => {
    const element = document.querySelector("#projetos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
          {/* Foto de perfil - À direita no desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src={profileImage}
              alt="Christian Gabriel Izidoro Nascimento"
              className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-glow"
            />
          </motion.div>

          {/* Conteúdo principal - À esquerda no desktop */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-2">
                Olá, eu sou
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">Christian Izidoro</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-foreground/90 font-medium">
                Desenvolvedor Front-End
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              Transformando ideias em interfaces modernas e funcionais.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjetos}
                className="bg-gradient-primary hover:opacity-90 hover:shadow-glow transition-all duration-300 shadow-soft group"
              >
                Ver Projetos
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
