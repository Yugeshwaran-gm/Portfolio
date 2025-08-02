import { useState } from "react";
import { Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiRequest("POST", "/api/contact", formData);
      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-primary-custom to-secondary-custom text-white">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919514955425" className="text-white/90 hover:text-white transition-colors">+91 9514955425</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a href="https://github.com/yugeshwarangm" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">github.com/yugeshwarangm</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a href="https://linkedin.com/in/yugeshwaran-g" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">linkedin.com/in/yugeshwaran-g</a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold mb-4">Areas of Interest</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-4 py-2 rounded-full">Full Stack Development</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">MERN Stack</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Python Backend</span>
                <span className="bg-white/20 px-4 py-2 rounded-full">Photography</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-custom hover:bg-red-600 text-white font-semibold py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
