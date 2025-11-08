// src/components/LanguageSwitcher.jsx
import { useState } from "react";
import brazilFlag from "../assets/brazil.png";
import usaFlag from "../assets/usa.png";

export default function LanguageSwitcher({ onChange }) {
  const [lang, setLang] = useState("pt");

  const toggleLang = (selectedLang) => {
    setLang(selectedLang);
    onChange(selectedLang); // avisa o App qual idioma está ativo
  };

  return (
    <div style={{ display: "flex", gap: "10px", cursor: "pointer" }}>
      <img
        src={brazilFlag}
        alt="Português"
        width={32}
        height={32}
        onClick={() => toggleLang("pt")}
        style={{ border: lang === "pt" ? "2px solid #000" : "none", borderRadius: "50%" }}
      />
      <img
        src={usaFlag}
        alt="English"
        width={32}
        height={32}
        onClick={() => toggleLang("en")}
        style={{ border: lang === "en" ? "2px solid #000" : "none", borderRadius: "50%" }}
      />
    </div>
  );
}
