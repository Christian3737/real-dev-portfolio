import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import brasilFlag from "@/assets/brasil.png";
import usaFlag from "@/assets/estados-unidos.png";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform"
      aria-label="Toggle language"
    >
      <img
        src={language === "pt" ? usaFlag : brasilFlag}
        alt={language === "pt" ? "Switch to English" : "Mudar para Português"}
        className="w-full h-full object-cover"
      />
    </Button>
  );
};

export default LanguageToggle;
