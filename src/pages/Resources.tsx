import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Download, FileText, Phone, ArrowRight, Mail } from "lucide-react";

const Resources = () => {
  const publications = [
    {
      title: "Buddy 2 Buddy",
      description: "Anti-bullying prevention workbook for students in primary and secondary schools. Teaches peer support, conflict resolution skills.",
      result: "30% absenteeism reduction",
      audience: "Students P4-S6",
    },
    {
      title: "Brain 2 Brain",
      description: "Substance use resistance and prevention guide for youth 12-20. Peer pressure strategies, decision-making skills.",
      result: "Nationwide school use",
      audience: "Youth 12-20",
    },
    {
      title: "Balance 2 Balance",
      description: "Stress/emotional regulation toolkit for ages 7-20. Mindfulness, coping skills, exam stress management.",
      result: "Academic resilience",
      audience: "Ages 7-20",
    },
  ];

  const freeResources = [
    {
      title: "Mental Health Spot Archives (PDF)",
      description: "Key takeaways from 200+ X Space discussions",
      icon: FileText,
    },
    {
      title: "Early Warning Signs Checklist",
      description: "Parent spotting guide (Luganda/English PDF)",
      icon: FileText,
    },
    {
      title: "Crisis Helpline Directory",
      description: "Uganda/East Africa emergency contacts (PDF)",
      icon: Phone,
    },
    {
      title: "Parent Conversation Starters",
      description: "Talking to teens about mental health (PDF)",
      icon: FileText,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Resources | Serene MindCare - Mental Health Publications & Tools</title>
        <meta 
          name="description" 
          content="Access Serene MindCare's mental health resources: Buddy 2 Buddy, Brain 2 Brain, Balance 2 Balance books, plus free downloadable guides for parents and educators." 
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
                  Resources & Publications
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Mental Health Resources
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed">
                  Evidence-based publications and free tools to support youth mental health 
                  in schools, homes, and communities.
                </p>
              </div>
            </div>
          </section>

          {/* Key Publications */}
          <section className="py-24">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                  Key Publications
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Evidence-Based Mental Health Books
                </h2>
                <p className="text-lg text-muted-foreground">
                  Powering Serene Minds Thrive — our flagship school transformation program.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {publications.map((pub, index) => (
                  <div 
                    key={index}
                    className="p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <BookOpen className="h-12 w-12 text-primary mb-6" />
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {pub.result}
                      </span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {pub.audience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center p-8 bg-secondary rounded-2xl">
                <p className="text-lg text-foreground mb-4">
                  <strong>Available:</strong> Purchase for schools/workshops or license for Serene Minds Thrive implementation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:serenemindcare5@gmail.com">
                    <Button size="lg">
                      <Mail className="h-5 w-5" />
                      Contact for Purchase
                    </Button>
                  </a>
                  <a href="tel:+256708248371">
                    <Button variant="outline" size="lg">
                      <Phone className="h-5 w-5" />
                      +256 708-248-371
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Free Resources */}
          <section className="py-24 bg-muted/30">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                  Free Downloads
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Free Resources
                </h2>
                <p className="text-lg text-muted-foreground">
                  Downloadable guides and tools for parents, educators, and young people.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {freeResources.map((resource, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl flex-shrink-0">
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                        Request Access
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Sign up for free updates and instant access to all resources
                </p>
                <Link to="/contact">
                  <Button size="lg">
                    Get Free Resources
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

export default Resources;
