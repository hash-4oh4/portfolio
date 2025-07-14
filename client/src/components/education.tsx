import { GraduationCap, University, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EDUCATION_DATA } from "@/lib/constants";

export function Education() {
  const { degree, certifications } = EDUCATION_DATA;

  return (
    <section id="education" className="content-layer py-20 bg-black/90 dark:bg-black/90">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <GraduationCap className="inline mr-4 text-cyber-green" size={48} />
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Degree */}
            <div className="cyber-border p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <University className="text-cyber-blue text-2xl mr-3" />
                <h3 className="text-xl font-semibold">{degree.title}</h3>
              </div>
              <p className="text-lg text-cyber-blue font-semibold mb-2">{degree.field}</p>
              <p className="text-slate-300 dark:text-slate-300 mb-2">{degree.school} • {degree.duration}</p>
              <p className="text-slate-400 dark:text-slate-400">GPA: {degree.gpa}</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {degree.coursework.map((course) => (
                    <Badge key={course} variant="secondary" className="skill-badge">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="cyber-border p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="text-cyber-blue text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between">
                    <span className="font-semibold">{cert.name}</span>
                    <span className={`text-sm ${cert.statusColor}`}>{cert.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
