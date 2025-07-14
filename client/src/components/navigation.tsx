import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#home", label: "home" },
  { href: "#education", label: "education" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
      
      // Determine active section
      const sections = navItems.map(item => item.href.slice(1)); // Remove # from href
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <nav className={`glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'backdrop-blur-lg' : ''}`}>
      {/* macOS Window Controls */}
      <div className="macos-window-controls flex items-center justify-start px-4 py-2 bg-cyber-black/20 border-b border-cyber-green/10">
        <div className="flex space-x-2">
          <div className="window-control w-3 h-3 bg-red-500 rounded-full transition-transform duration-200 hover:bg-red-400"></div>
          <div className="window-control w-3 h-3 bg-yellow-500 rounded-full transition-transform duration-200 hover:bg-yellow-400"></div>
          <div className="window-control w-3 h-3 bg-green-500 rounded-full transition-transform duration-200 hover:bg-green-400"></div>
        </div>
        <div className="flex-1 text-center">
          <span className="text-sm text-cyber-green font-mono">portfolio.terminal</span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold font-mono glow-text console-heading">salimul hashir</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-slate-200 hover:text-cyber-green transition-colors console-heading ${
                  activeSection === item.href.slice(1) ? 'text-cyber-green' : ''
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-green rounded-full"></div>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden p-2 rounded-lg hover:bg-cyber-black transition-colors"
                >
                  <Menu className="h-5 w-5 text-cyber-green" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-cyber-black border-cyber-green/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`relative text-left text-slate-200 hover:text-cyber-green transition-colors py-2 console-heading ${
                        activeSection === item.href.slice(1) ? 'text-cyber-green' : ''
                      }`}
                    >
                      {item.label}
                      {activeSection === item.href.slice(1) && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-cyber-green rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
