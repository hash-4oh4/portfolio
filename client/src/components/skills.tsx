import { Settings, Shield, Monitor, Layers, Cloud, Database, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SKILLS_DATA } from "@/lib/constants";

export function Skills() {
  const { programmingLanguages, securityTools, operatingSystems, frameworks, technicalSkills, databases, softSkills } = SKILLS_DATA;

  // Removed skill level rendering - just showing skill names now

  return (
    <section id="skills" className="content-layer py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <Settings className="inline mr-4 text-cyber-green" size={48} />
          Technical Skills
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Code className="inline mr-2" size={24} />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="skill-badge">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Security Tools */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Shield className="inline mr-2" size={24} />
                Security Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {securityTools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="skill-badge">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Operating Systems */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Monitor className="inline mr-2" size={24} />
                Operating Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {operatingSystems.map((os) => (
                  <Badge key={os} variant="secondary" className="skill-badge">
                    {os}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Frameworks & Libraries */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Layers className="inline mr-2" size={24} />
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <Badge key={framework} variant="secondary" className="skill-badge">
                    {framework}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Technical Skills */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Settings className="inline mr-2" size={24} />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Cloud className="inline mr-2" size={24} />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="skill-badge">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Databases */}
            <div className="cyber-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-cyber-green console-heading">
                <Database className="inline mr-2" size={24} />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {databases.map((db) => (
                  <Badge key={db} variant="secondary" className="skill-badge">
                    {db}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
