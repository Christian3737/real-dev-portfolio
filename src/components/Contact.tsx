import { Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

/* Seção de contato com gradiente e animações */
const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEmailClick = () => {
    navigator.clipboard.writeText("christian.gabriel.izidoro@gmail.com");
    toast({
      title: t("Email copiado!", "Email copied!"),
      description: t(
        "O endereço de email foi copiado para a área de transferência.",
        "The email address has been copied to the clipboard."
      ),
    });
  };

  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(65) 99338-1666",
      link: "https://wa.me/5565993381666",
      color: "text-green-400",
      isEmail: false,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@christianizidoro.dev",
      link: "https://instagram.com/christianizidoro.dev",
      color: "text-pink-400",
      isEmail: false,
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "christian.gabriel.izidoro@gmail.com",
      link: "#",
      color: "text-blue-400",
      isEmail: true,
    },
  ];

  return (
    <section id="contato" className="py-20 px-6 bg-gradient-contact">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            {t("Vamos", "Let's")}{" "}
            <span className="gradient-text">{t("conversar?", "talk?")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-lg text-muted-foreground mb-12">
            {t(
              "Se quiser falar comigo ou saber mais sobre meu trabalho, é só clicar abaixo.",
              "If you want to talk to me or learn more about my work, just click below."
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-glow border border-primary/20"
        >
          <div className="space-y-4 mb-8">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return contact.isEmail ? (
                <motion.button
                  key={contact.label}
                  onClick={handleEmailClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-5 rounded-lg bg-background/50 hover:bg-background/80 border border-border/30 hover:border-primary/50 transition-all group w-full text-left cursor-pointer"
                >
                  <motion.div
                    className={`${contact.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{contact.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.button>
              ) : (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-5 rounded-lg bg-background/50 hover:bg-background/80 border border-border/30 hover:border-primary/50 transition-all group"
                >
                  <motion.div
                    className={`${contact.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{contact.label}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 hover:shadow-glow transition-all duration-300 shadow-soft"
              asChild
            >
              <a
                href={`https://wa.me/5565993381666?text=${t(
                  "Olá%20Christian,%20vim%20pelo%20seu%20portfólio!",
                  "Hello%20Christian,%20I%20came%20from%20your%20portfolio!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t("Enviar Mensagem", "Send Message")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
