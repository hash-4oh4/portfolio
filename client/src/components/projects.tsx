import { Code, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROJECTS_DATA } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="content-layer py-20 bg-black/90 dark:bg-black/90">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <Code className="inline mr-4 text-cyber-green" size={48} />
          Projects
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project, index) => (
              <div key={index} className="project-card cyber-border p-6 rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-cyber-blue">{project.title}</h3>
                <p className="text-slate-300 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyber-blue hover:text-cyber-accent transition-colors p-0"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="mr-1" size={16} />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyber-blue hover:text-cyber-accent transition-colors p-0"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="mr-1" size={16} />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
