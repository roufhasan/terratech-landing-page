import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Projects from "@/components/home/Projects";
import ServicesShowCase from "@/components/home/ServicesShowCase";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowCase />
      <Industries />
      <Projects />
      <Footer />
    </>
  );
}
