import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    helpType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.contact.trim() || !formData.helpType) {
      toast({
        title: "Please fill in required fields",
        description: "Name, contact, and type of help are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours. For emergencies, please call us directly.",
    });
    
    setFormData({ name: "", contact: "", helpType: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/serenemindcare1", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/serene_mindcare", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/serene-mindcare-network/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100095059338237", label: "Facebook" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Serene MindCare - Get Help Today</title>
        <meta 
          name="description" 
          content="Contact Serene MindCare for mental health support, school program inquiries, or crisis intervention. Free initial assessments available. Call +256 708-248-371." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 gradient-hero overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="container relative">
              <div className="max-w-3xl text-center mx-auto">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  You Are Not Alone
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed mb-8">
                  Free initial assessments available. Someone cares. Help is here.
                </p>
                <a
                  href="tel:+256708248371"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-lg hover:bg-accent/90 transition-colors shadow-elevated"
                >
                  <Phone className="h-6 w-6" />
                  +256 708-248-371
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                    Get In Touch
                  </h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border shadow-card">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Phone/WhatsApp</h3>
                        <p className="text-muted-foreground mb-2">Immediate response for crises/school inquiries</p>
                        <a href="tel:+256708248371" className="text-primary font-medium hover:underline">
                          +256 708-248-371
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border shadow-card">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground mb-2">Program bookings, partnerships, speaking requests</p>
                        <a href="mailto:serenemindcare5@gmail.com" className="text-primary font-medium hover:underline">
                          serenemindcare5@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border shadow-card">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-xl flex-shrink-0">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Physical Location</h3>
                        <p className="text-muted-foreground mb-2">By appointment for clinical services</p>
                        <p className="text-foreground">Kumwenda-Kitende, Kampala, Uganda</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border shadow-card">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-xl flex-shrink-0">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">Response Time</h3>
                        <p className="text-muted-foreground">
                          Within 24 hours • <span className="text-primary font-medium">Crises: Instant</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-4">Follow Our Work</h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-xl transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 bg-card rounded-2xl border border-border shadow-card">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Quick Contact Form
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                        Phone or Email *
                      </label>
                      <Input
                        id="contact"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Your phone number or email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="helpType" className="block text-sm font-medium text-foreground mb-2">
                        I need help with *
                      </label>
                      <Select
                        value={formData.helpType}
                        onValueChange={(value) => setFormData({ ...formData, helpType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school">School Program (Serene Minds Thrive)</SelectItem>
                          <SelectItem value="individual">Individual Therapy</SelectItem>
                          <SelectItem value="family">Family Therapy</SelectItem>
                          <SelectItem value="crisis">Crisis/Urgent Support</SelectItem>
                          <SelectItem value="xspace">Mental Health Spot / X Space</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message (Optional)
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about how we can help..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>School Partnerships:</strong> Free Serene Minds Thrive assessment<br />
                      <strong>Individual Support:</strong> Free first consultation<br />
                      <strong>Emergencies:</strong> Call immediately
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
