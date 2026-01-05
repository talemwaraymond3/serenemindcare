import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Eye, Target, CheckCircle, Heart, Users, Shield, 
  Sparkles, Scale, ArrowRight, BookOpen, Megaphone, 
  HeartHandshake
} from "lucide-react";

const About = () => {
  const objectives = [
    {
      title: "Build Mental Health Literacy",
      description: "Equip young people, families, educators, and communities with knowledge through workshops, school programs, multilingual resources, digital tools, and campaigns.",
    },
    {
      title: "Provide Treatment & Rehabilitation",
      description: "Deliver evidence-based psychotherapy, neurological support, and rehabilitation programs for young people with mental health challenges.",
    },
    {
      title: "Empower Stakeholders",
      description: "Drive advocacy and investment in young people's mental health reforms and policies.",
    },
    {
      title: "Forge Strategic Partnerships",
      description: "Collaborate with schools, health systems, local and international organizations to integrate and scale mental health services.",
    },
  ];

  const values = [
    { icon: Scale, title: "Discipline", description: "Upholding the highest standards in mental health care and support." },
    { icon: Heart, title: "Compassion", description: "Delivering services with deep empathy, understanding, and heartfelt care." },
    { icon: Users, title: "Teamwork", description: "Collaborating within our team and with partners to achieve shared goals." },
    { icon: Shield, title: "Accountability", description: "Maintaining transparency and responsibility in all operations." },
    { icon: Sparkles, title: "Dignity", description: "Treating everyone with respect, fostering inclusivity and empathy." },
  ];

  const careApproach = [
    {
      letter: "C",
      title: "Collaborate",
      subtitle: "School & Community Partnerships",
      description: "Work hand-in-hand with schools (Serene Minds Thrive), parents, teachers, and peer leaders to create supportive environments where young people thrive. From P4-S6 classrooms to community workshops, collaboration multiplies our impact.",
      icon: Users,
    },
    {
      letter: "A",
      title: "Advocate",
      subtitle: "Policy Reform & Stigma Reduction",
      description: "Champion youth mental health through Mental Health Spot X Spaces (200+ discussions, 150+ speakers), National LIVE Conference, and policy briefs. We change systems so every child has access to care.",
      icon: Megaphone,
    },
    {
      letter: "R",
      title: "Rehabilitate",
      subtitle: "Clinical Treatment & Recovery",
      description: "Deliver evidence-based psychotherapy, neurological support, crisis intervention, and residential programs for depression, anxiety, ADHD, trauma, and behavioral challenges.",
      icon: HeartHandshake,
    },
    {
      letter: "E",
      title: "Educate",
      subtitle: "Mental Health Literacy",
      description: "Build knowledge through Buddy 2 Buddy, Brain 2 Brain, Balance 2 Balance books, multilingual resources, workshops, and digital campaigns. Equip communities to recognize needs early.",
      icon: BookOpen,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Serene MindCare - Vision, Mission & Values</title>
        <meta 
          name="description" 
          content="Learn about Serene MindCare's vision for accessible youth mental health care in Uganda, our mission, core values, and the CARE approach that guides our work." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 gradient-hero overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="container relative">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-teal-50 bg-teal-50/10 rounded-full border border-teal-50/20">
                  About Serene MindCare
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Championing Youth Mental Health in Uganda
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed">
                  We believe every young person deserves accessible, quality mental health care 
                  to unlock their full potential and thrive holistically.
                </p>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Vision */}
                <div className="p-10 bg-card rounded-2xl border border-border shadow-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-xl">
                      <Eye className="h-7 w-7" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A society where every young person (children, adolescents, and youth) receives 
                    accessible, quality mental health care to unlock their full potential and thrive holistically.
                  </p>
                </div>

                {/* Mission */}
                <div className="p-10 bg-card rounded-2xl border border-border shadow-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-xl">
                      <Target className="h-7 w-7" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We champion mental health for young people across Uganda by delivering accessible, 
                    evidence-based psychotherapy, neurological care, and rehabilitation services. Through 
                    literacy programs, school partnerships, stigma-busting advocacy, and collaborative 
                    networks, we equip communities to nurture resilience and unlock every young person's 
                    full potential.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section className="py-24 bg-muted/30">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                  Strategic Focus
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Objectives
                </h2>
                <p className="text-lg text-muted-foreground">
                  Four pillars guiding our work to transform youth mental health in Uganda.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <div 
                    key={index}
                    className="p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          {objective.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-24">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                  What We Stand For
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide every interaction and decision we make.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all text-center"
                  >
                    <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CARE Approach */}
          <section className="py-24 bg-primary text-primary-foreground">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-teal-50/10 rounded-full border border-teal-50/20">
                  Our Guiding Framework
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                  The CARE Approach
                </h2>
                <p className="text-xl text-teal-100">
                  "We CARE for Uganda's youth mental health"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {careApproach.map((item, index) => (
                  <div 
                    key={index}
                    className="p-8 bg-teal-50/5 rounded-2xl border border-teal-50/10"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-xl font-heading text-xl font-bold">
                        {item.letter}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-teal-200">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-teal-100 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-xl font-heading font-semibold mb-8">
                  Collaborate. Advocate. Rehabilitate. Educate. That's how we "CARE."
                </p>
                <Link to="/services">
                  <Button variant="hero" size="lg">
                    Explore Our Programs
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
