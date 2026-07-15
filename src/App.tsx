import "./App.css";
import Navbar from "@/components/ui-components/navbar";
import { Particles } from "@/components/ui/particles";
import { useEffect, useState } from "react";
import { AnimatedListDemo } from "@/components/ui-components/list";
import Contact  from "@/components/ui-components/contact";
import About from "@/components/ui-components/about";
import TechStack from "@/components/ui-components/teckstack";
import Projects from "@/components/ui-components/projects";



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <Navbar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

         <div className="relative min-h-full bg-white text-black dark:bg-gray-950 dark:text-white">
          <Particles 
          className="fixed inset-0 z-0"
          quantity={100}
          ease={80}
          color={darkMode ? "#ffffff" : "#000000"}
          refresh
        />

          <About />
        

        <AnimatedListDemo />
        <TechStack />
        <Projects />
        <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
