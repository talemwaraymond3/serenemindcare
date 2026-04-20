import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const quickLinks = [
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/resources", label: "Resources" },
    { path: "/events", label: "Events" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const programs = [
    { path: "/services#smt", label: "Serene Minds Thrive" },
    { path: "/services#clinical", label: "Clinical Services" },
    { path: "/services#mental-health-spot", label: "Mental Health Spot" },
    { path: "/resources", label: "Publications" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/serenemindcare1", label: "X (Twitter)" },
    { icon: Instagram, href: "https://www.instagram.com/serene_mindcare", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/serene-mindcare-network/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100095059338237", label: "Facebook" },
  ];

  return (
    <footer ref={ref} className="bg-green-800 text-green-100">
      <div className="border-b border-green-700/50">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-heading text-2xl font-bold text-green-50 mb-2">
                You Are Not Alone
              </h3>
              <p className="text-green-200">
                Free initial assessments available. Someone cares. Help is here.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+256708248371"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +256 708-248-371
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-green-50 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                Get Help Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Serene MindCare Logo"
                className="h-12 w-12 rounded-full bg-white"
              />
              <span className="font-heading text-xl font-bold text-green-50">Serene MindCare</span>
            </Link>
            <p className="text-green-200 mb-6 leading-relaxed">
              Championing mental health for young people across Uganda through accessible, evidence-based care.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-green-700/50 hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-green-50 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-green-200 hover:text-green-50 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-green-50 mb-4">Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-green-200 hover:text-green-50 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-green-50 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-200">+256 708-248-371</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-200">serenemindcare5@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-green-200">Kumwenda-Kitende, Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700/50">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-green-300">
          <p>© {new Date().getFullYear()} Serene MindCare Network. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-green-50 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
