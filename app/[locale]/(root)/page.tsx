import Container from "@/components/Container";
import HomeSection from "./components/(Home)/Home";
import About from "./components/(About)/About";
import Projects from "./components/(Projects)/Projects";
import Experience from "./components/(Experience)/Experience";
import Contact from "./components/(Contact)/Contact";

export default function Home() {
  return (
    <>
        <Container className="gap-20 md:gap-40 flex flex-col">
          <HomeSection  />
          <About />
          <Projects />
          <Experience  />
          <Contact />
        </Container>
    </>
  )
}
