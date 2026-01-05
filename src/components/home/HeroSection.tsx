import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Users, Mic, School, Heart } from "lucide-react";
import heroTeam from "@/assets/hero-team.png";

const HeroSection = () => {
  const stats = [
    { icon: Mic, value: "200+", label: "Mental Health Discussions" },
    { icon: Users, value: "150+", label: "Expert Speakers Featured" },
    { icon: School, value: "10+", label: "Schools Transformed" },
    { icon: Heart, value: "Free", label: "Assessments Available" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTeam})` }}
      />
      {/* Gradient Overlay for blend effect */}
      <div className="absolute inset-0 gradient-hero opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/75" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-teal-50/10 border border-teal-50/20 backdrop-blur-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-teal-50">Transforming Youth Mental Health in Uganda</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6 animate-slide-up">
            Every Young Person's Mental Health{" "}
            <span className="relative">
              Matters
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="hsl(45 90% 55%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-teal-100 mb-10 max-w-2xl mx-auto animate-slide-up animate-delay-100">
            Serene Minds Thrive — Transforming lives across Uganda through accessible, 
            evidence-based mental health care for children, adolescents, and youth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animate-delay-200">
            <Link to="/services">
              <Button variant="hero" size="xl">
                Free School Assessment
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                <Phone className="h-5 w-5" />
                Get Help Today
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="heroOutline" size="xl">
                <Calendar className="h-5 w-5" />
                Join Tuesday X Space
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up animate-delay-300">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-teal-50/5 border border-teal-50/10 backdrop-blur-sm hover:bg-teal-50/10 transition-colors"
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="font-heading text-3xl font-bold text-teal-50 mb-1">{stat.value}</div>
                <div className="text-sm text-teal-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
