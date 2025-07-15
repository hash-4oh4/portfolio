import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    // Frontend-only form handling
    console.log("Contact form submitted:", formData);
    
    toast({
      title: "Message received!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(true);
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="content-layer py-20 bg-black/90">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <MessageCircle className="inline mr-4 text-cyber-green" size={48} />
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 glow-text console-heading">Let's Connect</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always interested in discussing cybersecurity projects, career opportunities, 
                  or just connecting with fellow security professionals. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-lg">
                    <Mail className="text-cyber-green" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold console-heading">Email</h4>
                    <p className="text-slate-300">salimulhashir@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-lg">
                    <Phone className="text-cyber-green" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold console-heading">Phone</h4>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-lg">
                    <MapPin className="text-cyber-green" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold console-heading">Location</h4>
                    <p className="text-slate-300">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold mb-4 console-heading">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/salimulhashir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-lg hover:bg-cyber-green/30 transition-colors"
                  >
                    <Linkedin className="text-cyber-green" size={20} />
                  </a>
                  <a 
                    href="https://github.com/salimulhashir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-lg hover:bg-cyber-green/30 transition-colors"
                  >
                    <Github className="text-cyber-green" size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/salimulhashir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-lg hover:bg-cyber-green/30 transition-colors"
                  >
                    <Twitter className="text-cyber-green" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="cyber-border project-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 glow-text console-heading">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto mb-4 text-cyber-green" size={48} />
                    <h4 className="text-xl font-semibold mb-2 text-cyber-green">Message Sent!</h4>
                    <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 console-heading">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-cyber-black/50 border-cyber-green/30 focus:border-cyber-green"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 console-heading">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-cyber-black/50 border-cyber-green/30 focus:border-cyber-green"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 console-heading">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-cyber-black/50 border-cyber-green/30 focus:border-cyber-green"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 console-heading">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-cyber-black/50 border-cyber-green/30 focus:border-cyber-green"
                        placeholder="Tell me about your project, question, or opportunity..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyber-green hover:bg-cyber-green/80 text-white font-semibold console-heading"
                    >
                      Send Message
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
