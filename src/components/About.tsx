/* Seção sobre mim */
const About = () => {
  return (
    <section id="sobre" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="fade-up delay-100 bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50">
          <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
            <p>
              Sou um desenvolvedor front-end apaixonado por transformar ideias em experiências 
              digitais marcantes. Tenho foco em criar interfaces modernas, responsivas e com 
              boa usabilidade, sempre buscando entregar soluções que façam a diferença.
            </p>
            <p>
              Minha jornada no desenvolvimento web me permitiu dominar tecnologias como HTML, CSS, 
              JavaScript e React, além de desenvolver um olhar atento para UI/UX. Acredito que 
              um bom código é aquele que resolve problemas reais e proporciona uma experiência 
              fluida para o usuário.
            </p>
            <p>
              Estou em busca de uma oportunidade CLT para crescer profissionalmente, contribuir 
              com projetos desafiadores e fazer parte de uma equipe que valoriza qualidade e inovação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
