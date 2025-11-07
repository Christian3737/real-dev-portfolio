import { Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Seção de contato */
const Contact = () => {
  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (65) 99338-1666",
      link: "https://wa.me/5565993381666",
      color: "text-green-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@christian.izidoro.dev",
      link: "https://instagram.com/christian.izidoro.dev",
      color: "text-pink-500",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "christian.gabriel.izidoro@gmail.com",
      link: "mailto:christian.gabriel.izidoro@gmail.com",
      color: "text-blue-500",
    },
  ];

  return (
    <section id="contato" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="fade-up delay-100 bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border/50">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Estou disponível para oportunidades e projetos. Vamos conversar?
          </p>

          <div className="space-y-4 mb-8">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className={`${contact.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground/80">{contact.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <Button
            size="lg"
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
            asChild
          >
            <a
              href="https://wa.me/5565993381666?text=Olá%20Christian,%20vim%20pelo%20seu%20portfólio!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar Mensagem
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
