import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Mic, School, Users, ExternalLink, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      date: "Every Tuesday",
      time: "8PM EAT",
      title: "Mental Health Spot X Spaces",
      description: "Weekly live discussions on X @serenemindcare1",
      type: "X Space",
      icon: Mic,
    },
  ];

  const upcomingTopics = [
    "Exam Stress Survival — Strategies for S4/S6 students",
    "Parenting Teens in Crisis — Family support panel",
    "Teacher Burnout — Classroom mental health",
    "Building Resilience — Tools for young people",
  ];

  const pastHighlights = [
    "200+ Mental Health Spot discussions",
    "150+ expert speakers (Uganda, Kenya, global)",
    "National LIVE Suicide Prevention Conference",
    "84+ caregivers trained across East Africa",
  ];

  const eventTypes = [
    { icon: Mic, title: "Weekly X Spaces", description: "Free, live Q&A every Tuesday" },
    { icon: School, title: "School Workshops", description: "Serene Minds Thrive modules" },
    { icon: Users, title: "Parent/Teacher Trainings", description: "Capacity building sessions" },
    { icon: Calendar, title: "Community Events", description: "Sensitization programs" },
  ];

  return (
    <>
      <Helmet>
        <title>Events & X Spaces | Serene MindCare - Mental Health Discussions</title>
        <meta 
          name="description" 
          content="Join Serene MindCare's weekly Mental Health Spot X Spaces every Tuesday 8PM EAT. View upcoming events, school assessments, and community workshops." 
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
                  Events & X Spaces
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Join the Conversation
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed mb-8">
                  Live engagement featuring our signature Tuesday discussions, 
                  school program dates, and community events.
                </p>
                <a 
                  href="https://x.com/serenemindcare1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="xl">
                    <Mic className="h-6 w-6" />
                    Join Tuesday X Space
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Featured Event */}
          <section className="py-24">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="p-8 lg:p-12 bg-accent text-accent-foreground rounded-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-accent-foreground/10 rounded-xl">
                      <Mic className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-sm font-medium opacity-80">Weekly Live Event</span>
                      <h2 className="font-heading text-2xl font-bold">Mental Health Spot X Spaces</h2>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-lg font-semibold mb-2">Every Tuesday 8PM EAT</p>
                      <p className="opacity-80">
                        Join live on X @serenemindcare1 for stigma-free conversations about 
                        mental health. Connect with experts, ask questions, and be part of the change.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Upcoming Topics:</p>
                      <ul className="space-y-2">
                        {upcomingTopics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a 
                    href="https://x.com/serenemindcare1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                      Follow @serenemindcare1
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Event Types */}
          <section className="py-24 bg-muted/30">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Types of Events
                </h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to engage with Serene MindCare throughout the year.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {eventTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow text-center"
                  >
                    <type.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {type.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Past Highlights */}
          <section className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                    2025 Achievements
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                    Past Highlights
                  </h2>
                  <ul className="space-y-4">
                    {pastHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-primary text-primary-foreground rounded-2xl">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Want to Be a Speaker?
                  </h3>
                  <p className="text-teal-100 mb-6 leading-relaxed">
                    Speakers and panelists are always welcome! Share your expertise 
                    on Mental Health Spot X Spaces and help reach thousands of young 
                    people across Uganda and beyond.
                  </p>
                  <a 
                    href="https://x.com/serenemindcare1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="lg">
                      DM to Feature Your Expertise
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </a>
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

export default Events;
