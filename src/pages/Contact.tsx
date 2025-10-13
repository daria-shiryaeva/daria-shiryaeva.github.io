import { useState } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks—I'll get back to you shortly.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
            <p className="text-xl text-muted-foreground mb-12">
              I'm open to collaborations and graduate roles from 2026. Get in touch to discuss projects, opportunities, or ideas.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Connect</h2>
                <div className="space-y-6">
                  <a
                    href="mailto:daria@example.com"
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                  >
                    <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="font-semibold mb-1 group-hover:text-accent transition-colors">Email</div>
                      <div className="text-muted-foreground">daria@example.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/daria-shiryaeva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                  >
                    <Linkedin className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                      <div className="font-semibold mb-1 group-hover:text-accent transition-colors">LinkedIn</div>
                      <div className="text-muted-foreground">Connect with me</div>
                    </div>
                  </a>

                  <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Open to graduate schemes and collaboration from 2026. Currently completing my Master's at the University of Bath.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
