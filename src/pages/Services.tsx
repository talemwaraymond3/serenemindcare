import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  School, Mic, Stethoscope, BookOpen, Users, CheckCircle, 
  ArrowRight, Calendar, Phone, Brain, Heart, Shield,
  MessageCircle, Home, AlertTriangle
} from "lucide-react";

const Services = () => {
  const conditions = [
    "Depression & anxiety disorders",
    "Suicidal ideation & self-harm",
    "ADHD & focus challenges",
    "Post-traumatic stress (PTSD)",
    "Eating disorders & body image",
    "Psychosis & early intervention",
    "Behavioral & conduct issues",
    "Grief/loss & adjustment",
    "OCD",
    "Social anxiety & peer challenges",
  ];

  const therapyTypes = [
    { icon: MessageCircle, title: "Individual Therapy", description: "Personalized counseling using CBT, DBT, Play Therapy (ages 7-12), Solution-Focused Brief Therapy, and Trauma-Focused CBT." },
    { icon: Users, title: "Group Therapy", description: "Age-appropriate peer groups for stress management, social skills, grief support, and self-esteem building." },
    { icon: Home, title: "Family Therapy", description: "Parent-child sessions and family systems work to strengthen relationships and communication." },
    { icon: Shield, title: "Specialized Rehabilitation", description: "Residential/intensive support for severe cases with 24/7 care and structured recovery pathways." },
    { icon: AlertTriangle, title: "Crisis Intervention", description: "Immediate response for urgent mental health needs. Available for emergencies." },
  ];

  return (
    <>
      <Helmet>
        <title>Services & Programs | Serene MindCare - Mental Health Care Uganda</title>
        <meta 
          name="description" 
          content="Explore Serene MindCare's comprehensive mental health services: Serene Minds Thrive school program, Mental Health Spot X Spaces, clinical therapy, and educational resources." 
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
                  Services & Programs
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Comprehensive Mental Health Support
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed mb-8">
                  From school programs to clinical services, we provide accessible care 
                  for children, adolescents, and youth ages 7-24.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#smt">
                    <Button variant="hero" size="lg">
                      <School className="h-5 w-5" />
                      School Programs
                    </Button>
                  </a>
                  <a href="#clinical">
                    <Button variant="heroOutline" size="lg">
                      <Stethoscope className="h-5 w-5" />
                      Clinical Services
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Serene Minds Thrive */}
          <section id="smt" className="py-24 scroll-mt-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-xl">
                      <School className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Flagship Program</span>
                      <h2 className="font-heading text-3xl font-bold text-foreground">Serene Minds Thrive</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Transforming Ugandan schools (Primary P4-P7, Secondary S1-S6) into mental health 
                    safe spaces for ages 7-20. A year-round program delivering interactive modules 
                    through needs assessments, peer mentor clubs, teacher training, parent workshops, 
                    and rigorous monitoring.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="font-heading font-semibold text-foreground mb-4">Core Modules</h3>
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span><strong>Buddy 2 Buddy</strong> — Anti-bullying prevention</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span><strong>Brain 2 Brain</strong> — Substance use resistance</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span><strong>Balance 2 Balance</strong> — Stress/emotional regulation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>Career development & mental health awareness</span>
                      </li>
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button size="lg">
                      Get Free Assessment
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="bg-secondary/50 rounded-2xl p-8">
                  <h3 className="font-heading font-semibold text-foreground mb-6">Expected Outcomes</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-4 bg-card rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">30%</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Reduced Absenteeism</p>
                        <p className="text-sm text-muted-foreground">Improved academic attendance</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Brain className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Increased Literacy</p>
                        <p className="text-sm text-muted-foreground">Mental health awareness & stigma reduction</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Earlier Identification</p>
                        <p className="text-sm text-muted-foreground">By trained teachers & parents</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-card rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Reduced High-Risk Behaviors</p>
                        <p className="text-sm text-muted-foreground">Suicide, substances, and more</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mental Health Spot */}
          <section id="mental-health-spot" className="py-24 bg-muted/30 scroll-mt-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                    <h3 className="font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      Recent Sessions
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "How to stay sober and healthy throughout holidays",
                        "Khart and its effects on young people",
                        "How men can handle difficult emotions",
                        "How physical exercises can improve mood",
                        "Depression among youths",
                        "Impact of adverse childhood experiences on adulthood",
                      ].map((topic, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                          <Mic className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://x.com/serenemindcare1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      View All Recordings <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-xl">
                      <Mic className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Weekly X Spaces</span>
                      <h2 className="font-heading text-3xl font-bold text-foreground">Mental Health Spot</h2>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Every Tuesday 8PM EAT — creating stigma-free conversations about mental health 
                    for young people across Uganda and beyond. Since launch, we've hosted over 200 
                    discussions featuring 150+ speakers from diverse disciplines worldwide.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-heading font-semibold text-foreground mb-4">What We Cover</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Adolescent anxiety & depression",
                        "Suicide prevention",
                        "Digital wellness",
                        "Parenting teens",
                        "Teacher mental health",
                        "Substance use prevention",
                      ].map((topic, index) => (
                        <span key={index} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://x.com/serenemindcare1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button size="lg">
                        Join Live on X
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </a>
                    <Link to="/contact">
                      <Button variant="outline" size="lg">
                        Become a Speaker
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Clinical Services */}
          <section id="clinical" className="py-24 scroll-mt-24">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-teal-600 text-primary-foreground rounded-xl">
                    <Stethoscope className="h-7 w-7" />
                  </div>
                </div>
                <span className="text-sm font-medium text-primary">Treatment & Rehabilitation</span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Direct Clinical Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Individual, group, family, and residential support for ages 7-24. 
                  Free initial assessments, sliding scale fees, in-person (Kampala) + virtual.
                </p>
              </div>

              {/* Conditions */}
              <div className="mb-16">
                <h3 className="font-heading text-xl font-semibold text-foreground text-center mb-8">
                  Conditions We Treat
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {conditions.map((condition, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>

              {/* Therapy Types */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {therapyTypes.map((therapy, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <therapy.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {therapy.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {therapy.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link to="/contact">
                  <Button size="lg">
                    <Phone className="h-5 w-5" />
                    Book Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="py-24 bg-primary text-primary-foreground">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-xl">
                    <BookOpen className="h-7 w-7" />
                  </div>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                  Key Publications
                </h2>
                <p className="text-xl text-teal-100">
                  Evidence-based mental health books powering Serene Minds Thrive
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Buddy 2 Buddy",
                    description: "Anti-bullying prevention workbook for students. Teaches peer support and conflict resolution skills.",
                    result: "30% absenteeism reduction",
                  },
                  {
                    title: "Brain 2 Brain",
                    description: "Substance use resistance and prevention guide for youth 12-20. Peer pressure strategies and decision-making skills.",
                    result: "Nationwide school use",
                  },
                  {
                    title: "Balance 2 Balance",
                    description: "Stress/emotional regulation toolkit for ages 7-20. Mindfulness, coping skills, exam stress management.",
                    result: "Academic resilience",
                  },
                ].map((book, index) => (
                  <div 
                    key={index}
                    className="p-8 bg-teal-50/5 rounded-2xl border border-teal-50/10"
                  >
                    <h3 className="font-heading text-xl font-semibold mb-3">{book.title}</h3>
                    <p className="text-teal-200 mb-4 leading-relaxed">{book.description}</p>
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {book.result}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link to="/resources">
                  <Button variant="hero" size="lg">
                    Access Free Resources
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

export default Services;
