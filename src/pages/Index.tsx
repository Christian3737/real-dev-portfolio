import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import FloatingElements from "@/components/FloatingElements";
import ScrollProgress from "@/components/ScrollProgress";

/* Página principal do portfólio */
const Index = () => {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <FloatingElements />
      <ScrollProgress />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
