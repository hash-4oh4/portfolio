import { MatrixRain } from "@/components/matrix-rain";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
//import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cyber-dark text-slate-200">
      <MatrixRain />
      <Navigation />
      <div className="relative z-10">
        <div className="mac-window max-w-7xl mx-auto my-8">
          <div className="mac-window-header">
            <div className="mac-window-controls">
              <div className="mac-window-control close"></div>
              <div className="mac-window-control minimize"></div>
              <div className="mac-window-control maximize"></div>
            </div>
            <div className="mac-window-title">portfolio.salimul.dev</div>
          </div>
          <div className="mac-window-content">
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Skills />
               <!-- blog removed and can be added with <Blog />  -->
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
