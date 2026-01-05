import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Mic, Users, Mail, ArrowRight } from "lucide-react";

const Team = () => {
  const achievements = [
    "Organized National LIVE Suicide Prevention Conference (400+ attendees)",
    "Delivered school trainings reducing 28% suicide ideation",
    "Hosted 200+ Mental Health Spot X Spaces with 150+ global speakers",
    "Developed Serene Minds Thrive school transformation program",
  ];

  const expertise = [
    "CBT",
    "Motivational Interviewing",
    "Crisis intervention",
    "School mental health",
    "Youth psychotherapy",
  ];

  const teamRoles = [
    {
      title: "Clinical Counselors",
      description: "Specializing in child, adolescent, and youth therapy (expanding)",
      icon: Users,
    },
    {
      title: "School Program Facilitators",
      description: "Serene Minds Thrive trainers for P4-S6 classrooms",
      icon: BookOpen,
    },
    {
      title: "Mental Health Spot Moderators",
      description: "X Space hosts connecting global experts with Ugandan youth",
      icon: Mic,
    },
    {
      title: "Community Outreach Coordinators",
      description: "Parent workshops and sensitization programs",
      icon: Users,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Serene MindCare - Mental Health Professionals</title>
        <meta 
          name="description" 
          content="Meet the Serene MindCare team led by Kizito Julius, with clinical counselors, school program facilitators, and mental health advocates transforming youth mental health in Uganda." 
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
                  Our Team
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Meet the People Behind Our Mission
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed">
                  Dedicated mental health professionals, educators, and advocates 
                  working to transform youth mental health in Uganda.
                </p>
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="aspect-square max-w-md bg-secondary rounded-2xl flex items-center justify-center mb-8">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="font-heading text-4xl font-bold text-primary">KJ</span>
                      </div>
                      <p className="text-muted-foreground">Founder Photo</p>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                    Founder & Lead
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                    Kizito Julius
                  </h2>
                  <p className="text-lg text-primary font-medium mb-6">
                    Co-Founder & Lead Mental Health Specialist
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Kizito Julius leads Serene Mindcare Network with over 5 years of frontline 
                    youth mental health experience in Uganda. Currently pursuing MSc Clinical 
                    Psychology, he's Country Coordinator at Your Ally Foundation where he trained 
                    84+ caregivers across East Africa.
                  </p>

                  <div className="mb-8">
                    <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-heading font-semibold text-foreground mb-4">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {expertise.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-2">
                      MHFA/UNICEF Certified | First-Class BSc Guidance & Counselling
                    </p>
                    <blockquote className="text-foreground italic">
                      "Every young person's mental health matters. We're building Uganda's solution."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Roles */}
          <section className="py-24 bg-muted/30">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our Dedicated Team
                </h2>
                <p className="text-lg text-muted-foreground">
                  A growing team of professionals committed to transforming youth mental health.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamRoles.map((role, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow text-center"
                  >
                    <role.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Join Us CTA */}
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="p-12 bg-primary text-primary-foreground rounded-2xl">
                  <h2 className="font-heading text-3xl font-bold mb-4">
                    Join Our Mission
                  </h2>
                  <p className="text-lg text-teal-100 mb-8">
                    We're always looking for passionate mental health professionals, 
                    counselors, trainers, X Space moderators, and school ambassadors.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:serenemindcare5@gmail.com">
                      <Button variant="hero" size="lg">
                        <Mail className="h-5 w-5" />
                        Apply for Careers
                      </Button>
                    </a>
                    <Link to="/contact">
                      <Button variant="heroOutline" size="lg">
                        Volunteer With Us
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-teal-200">
                    Email: serenemindcare5@gmail.com
                  </p>
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

export default Team;
