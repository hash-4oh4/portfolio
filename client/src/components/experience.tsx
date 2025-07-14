import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE_DATA } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="content-layer py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <Briefcase className="inline mr-4 text-cyber-green" size={48} />
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8">
            <div className="timeline-line"></div>
            
            {EXPERIENCE_DATA.map((item, index) => (
              <div key={index} className="timeline-item relative mb-12 last:mb-0">
                <div className="cyber-border p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-cyber-blue">{item.title}</h3>
                    <span className="text-slate-400 dark:text-slate-400">{item.duration}</span>
                  </div>
                  <p className="text-lg font-semibold mb-4">{item.company}</p>
                  <ul className="text-slate-300 dark:text-slate-300 space-y-2 mb-4">
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>• {responsibility}</li>
                    ))}
                  </ul>
                  {item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="skill-badge">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
