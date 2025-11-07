/* Rodapé do site */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Christian Gabriel Izidoro Nascimento — Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70 font-['Brush_Script_MT',cursive] text-lg">
            Desenvolvido por Christian Izidoro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
