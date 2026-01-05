import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-50 mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-teal-100 mb-8 leading-relaxed">
                Whether you're a school looking to transform your campus, a parent seeking support, 
                or someone who wants to help — we're here for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    <Phone className="h-5 w-5" />
                    Get Help Today
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="heroOutline" size="lg">
                    <Heart className="h-5 w-5" />
                    Support Our Mission
                  </Button>
                </Link>
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid gap-4">
              <div className="p-6 bg-teal-50/10 rounded-2xl border border-teal-50/20 backdrop-blur-sm">
                <h3 className="font-heading font-semibold text-teal-50 mb-2">For Schools</h3>
                <p className="text-teal-200 mb-4">Free needs assessment for January term. Transform your campus into a mental health safe space.</p>
                <Link to="/services" className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Start Free Assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="p-6 bg-teal-50/10 rounded-2xl border border-teal-50/20 backdrop-blur-sm">
                <h3 className="font-heading font-semibold text-teal-50 mb-2">For Individuals</h3>
                <p className="text-teal-200 mb-4">Free first consultation. Individual, group, and family therapy available in-person and virtually.</p>
                <Link to="/contact" className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="p-6 bg-teal-50/10 rounded-2xl border border-teal-50/20 backdrop-blur-sm">
                <h3 className="font-heading font-semibold text-teal-50 mb-2 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  Join Our Tuesday X Space
                </h3>
                <p className="text-teal-200 mb-4">Every Tuesday 8PM EAT @serenemindcare1. Connect with experts and join the conversation.</p>
                <a 
                  href="https://x.com/serenemindcare1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Follow on X <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
