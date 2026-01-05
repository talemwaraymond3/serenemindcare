import { Users, Megaphone, HeartHandshake, BookOpen } from "lucide-react";

const CARESection = () => {
  const careItems = [
    {
      letter: "C",
      title: "Collaborate",
      subtitle: "School & Community Partnerships",
      description: "Work hand-in-hand with schools, parents, teachers, and peer leaders to create supportive environments where young people thrive.",
      icon: Users,
      color: "bg-teal-500",
    },
    {
      letter: "A",
      title: "Advocate",
      subtitle: "Policy Reform & Stigma Reduction",
      description: "Champion youth mental health through Mental Health Spot X Spaces, National LIVE Conference, and policy briefs.",
      icon: Megaphone,
      color: "bg-accent",
    },
    {
      letter: "R",
      title: "Rehabilitate",
      subtitle: "Clinical Treatment & Recovery",
      description: "Deliver evidence-based psychotherapy, neurological support, crisis intervention, and residential programs.",
      icon: HeartHandshake,
      color: "bg-teal-600",
    },
    {
      letter: "E",
      title: "Educate",
      subtitle: "Mental Health Literacy",
      description: "Build knowledge through our books, multilingual resources, workshops, and digital campaigns.",
      icon: BookOpen,
      color: "bg-teal-400",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
            Our Guiding Framework
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We <span className="text-primary">CARE</span> for Uganda's Youth Mental Health
          </h2>
          <p className="text-lg text-muted-foreground">
            Our philosophy drives everything we do — from school programs to policy advocacy.
          </p>
        </div>

        {/* CARE Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careItems.map((item, index) => (
            <div
              key={item.letter}
              className="group relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Letter Badge */}
              <div className={`absolute -top-4 left-6 flex items-center justify-center w-12 h-12 ${item.color} text-primary-foreground rounded-xl font-heading text-2xl font-bold shadow-soft`}>
                {item.letter}
              </div>

              {/* Content */}
              <div className="pt-6">
                <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {item.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="text-xl font-heading font-semibold text-foreground">
            <span className="text-primary">Collaborate.</span>{" "}
            <span className="text-accent">Advocate.</span>{" "}
            <span className="text-teal-600">Rehabilitate.</span>{" "}
            <span className="text-teal-400">Educate.</span>{" "}
            That's how we <span className="text-primary">"CARE."</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CARESection;
