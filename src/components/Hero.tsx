import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/foto.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

/* Seção hero com apresentação principal - Layout moderno */
const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToProjetos = () => {
    const element = document.querySelector("#projetos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = '/curriculo.pdf'; // Você precisará adicionar o PDF em public/
    link.download = 'Christian_Izidoro_CV.pdf';
    link.click();
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
                {t("Olá, eu sou", "Hello, I'm")}
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">Christian Izidoro</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-foreground/90 font-medium">
                {t("Desenvolvedor Front-End", "Front-End Developer")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              {t(
                "Transformando ideias em interfaces modernas e funcionais.",
                "Transforming ideas into modern and functional interfaces."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToProjetos}
                className="bg-gradient-primary hover:opacity-90 hover:shadow-glow transition-all duration-300 shadow-soft group"
              >
                {t("Ver Projetos", "View Projects")}
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
                className="border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                {t("Baixar Currículo", "Download CV")}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
