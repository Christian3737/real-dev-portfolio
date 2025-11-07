import { Code2, Palette, GitBranch, Smartphone, Database, Layout } from "lucide-react";

/* Seção de habilidades técnicas */
const Skills = () => {
  const skills = [
    { name: "HTML & CSS", level: 95, icon: Code2, color: "text-orange-500" },
    { name: "JavaScript", level: 90, icon: Code2, color: "text-yellow-500" },
    { name: "React", level: 85, icon: Layout, color: "text-blue-500" },
    { name: "UI/UX Design", level: 80, icon: Palette, color: "text-purple-500" },
    { name: "Responsividade", level: 92, icon: Smartphone, color: "text-green-500" },
    { name: "Git & GitHub", level: 88, icon: GitBranch, color: "text-red-500" },
  ];

  return (
    <section id="habilidades" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="fade-up bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-soft hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${skill.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                
                {/* Barra de progresso */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-right">
                  {skill.level}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
