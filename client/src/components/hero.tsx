import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldQuestion, Download, Mail } from "lucide-react";

export function Hero() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Securing the digital world, one vulnerability at a time.";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'cybersecurity-resume.pdf';
    link.click();
  };

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="content-layer min-h-screen flex items-center matrix-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Removed icon above homepage */}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text font-mono">
            <span className="text-cyber-green name-typing-animation">
              salimul hashir.
            </span>
          </h1>
          
          <div className="font-mono text-lg md:text-xl mb-8 h-8 flex">
            <span className="text-cyber-green">
              {typingText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 dark:text-slate-300 mb-12 max-w-2xl">
            Motivated Computer Science Engineer with a keen interest in Cyber Security. 
            Possessing expertise in network security, penetration testing, and system hardening. 
            Currently pursuing Bachelor's in Computer Science Engineering (Cyber Security) at Dr. Mahalingam College of Engineering and Technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="cyber-border px-8 py-3 rounded-lg font-semibold transition-all hover:bg-cyber-green hover:text-white"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              onClick={handleGetInTouch}
              className="bg-gradient-cyber px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyber-green/25 transition-all"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
