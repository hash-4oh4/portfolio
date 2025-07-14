import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="content-layer bg-black/95 dark:bg-black/95 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="text-cyber-green text-2xl" />
            <span className="text-xl font-bold font-mono glow-text">Salimul Hashir</span>
          </div>
          <p className="text-slate-400 dark:text-slate-400 mb-6">
            © 2024 Salimul Hashir. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-400 dark:text-slate-400 hover:text-cyber-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 dark:text-slate-400 hover:text-cyber-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 dark:text-slate-400 hover:text-cyber-green transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
