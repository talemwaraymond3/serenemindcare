import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, School, Mic, Stethoscope, BookOpen } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: School,
      title: "Serene Minds Thrive",
      tag: "Flagship Program",
      description: "Transforming Ugandan schools (P4-S6) into mental health safe spaces for ages 7-20. Includes Buddy 2 Buddy, Brain 2 Brain, and Balance 2 Balance modules.",
      features: ["Student wellness workshops", "Teacher training", "Parent engagement", "Peer mentor clubs"],
      link: "/services#smt",
      color: "bg-primary",
    },
    {
      icon: Mic,
      title: "Mental Health Spot",
      tag: "Weekly X Spaces",
      description: "Every Tuesday 8PM EAT — creating stigma-free conversations about mental health for young people. 200+ discussions hosted with 150+ expert speakers.",
      features: ["Live Q&A sessions", "Expert speakers", "Recorded archives", "Global reach"],
      link: "/services#mental-health-spot",
      color: "bg-accent",
    },
    {
      icon: Stethoscope,
      title: "Clinical Services",
      tag: "Treatment & Rehabilitation",
      description: "Individual, group, family, and residential support for ages 7-24. Evidence-based psychotherapy, crisis intervention, and recovery pathways.",
      features: ["CBT & DBT therapy", "Play therapy (ages 7-12)", "Family therapy", "Crisis intervention"],
      link: "/services#clinical",
      color: "bg-teal-600",
    },
    {
      icon: BookOpen,
      title: "Key Publications",
      tag: "Educational Resources",
      description: "Evidence-based mental health books powering our school programs: Buddy 2 Buddy, Brain 2 Brain, and Balance 2 Balance workbooks.",
      features: ["Anti-bullying prevention", "Substance resistance", "Stress regulation", "Free resources"],
      link: "/resources",
      color: "bg-teal-400",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
              Services & Programs
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-muted-foreground">
              From school programs to clinical services, we provide accessible care at every level.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.link}
              className="group p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex items-center justify-center w-14 h-14 ${program.color} text-primary-foreground rounded-xl shadow-soft group-hover:scale-110 transition-transform`}>
                  <program.icon className="h-7 w-7" />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 mb-1 text-xs font-medium text-primary bg-secondary rounded">
                    {program.tag}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              <ul className="grid grid-cols-2 gap-2">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border flex items-center text-primary font-medium">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
