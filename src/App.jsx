import ReactLenis from "lenis/react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <ReactLenis root>
        <Nav />
        <main>
          <Hero />
          <Schedule />
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
