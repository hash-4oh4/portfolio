import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactMessage } from "@shared/schema";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ['/api/contact-messages'] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="content-layer py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 glow-text console-heading">
          <Mail className="inline mr-4 text-cyber-green" size={48} />
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyber-blue">Let's Connect</h3>
                <p className="text-slate-300 dark:text-slate-300 mb-6">
                  I'm always interested in discussing cybersecurity, collaborating on projects, 
                  or exploring new opportunities in the field. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-cyber-green text-xl w-6" />
                  <span>salimulhashir2004@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-cyber-green text-xl w-6" />
                  <span>+91 9942440513</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-cyber-green text-xl w-6" />
                  <span>Chennai, India</span>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="cyber-border hover:bg-cyber-green hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="cyber-border hover:bg-cyber-green hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="cyber-border hover:bg-cyber-green hover:text-white transition-all"
                  >
                    <Twitter size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="cyber-border hover:bg-cyber-green hover:text-white transition-all"
                  >
                    <MessageCircle size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="cyber-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-black dark:bg-black border-slate-600 dark:border-slate-600 focus:border-cyber-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-black dark:bg-black border-slate-600 dark:border-slate-600 focus:border-cyber-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full bg-black dark:bg-black border-slate-600 dark:border-slate-600 focus:border-cyber-green transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your message..."
                      required
                      className="w-full bg-black dark:bg-black border-slate-600 dark:border-slate-600 focus:border-cyber-green transition-colors"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-cyber py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyber-green/25 transition-all"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
