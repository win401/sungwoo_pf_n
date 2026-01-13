import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main id="top">
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact formId="xqeezowy"></Contact>
      <ScrollToTop></ScrollToTop>
    </main>
  );
}
