import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "How Serene Minds Thrive Cut School Absenteeism by 30%",
      excerpt: "Real results from Ugandan secondary schools using our flagship program. Headteacher testimonials and before/after data included.",
      date: "Jan 2026",
      readTime: "5 min read",
      category: "School Programs",
      featured: true,
    },
    {
      title: "5 Signs Your Child Needs Mental Health Support",
      excerpt: "Parent checklist developed from 200+ Mental Health Spot discussions. Free Luganda/English PDF download available.",
      date: "Dec 2025",
      readTime: "4 min read",
      category: "Parent Resources",
      featured: true,
    },
    {
      title: "Exam Stress Survival Guide for S4/S6 Students",
      excerpt: "Practical coping strategies from last Tuesday's X Space session. Printable worksheet included.",
      date: "Dec 2025",
      readTime: "3 min read",
      category: "Student Tips",
      featured: false,
    },
    {
      title: "Why Teachers Need Mental Health Support Too",
      excerpt: "Burnout prevention strategies for Ugandan educators delivering daily student support.",
      date: "Nov 2025",
      readTime: "4 min read",
      category: "Teacher Support",
      featured: false,
    },
  ];

  const categories = [
    "School Programs",
    "Parent Resources", 
    "Student Tips",
    "Teacher Support",
    "Uganda Mental Health News",
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Serene MindCare - Mental Health Articles & Resources</title>
        <meta 
          name="description" 
          content="Read the latest mental health articles from Serene MindCare covering school programs, parenting tips, student wellbeing, and teacher support in Uganda." 
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
                  Blog & Articles
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Latest Articles
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed">
                  Insights on school mental health, parenting teens, student wellbeing, 
                  and teacher support from our team and Mental Health Spot discussions.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Section */}
          <section className="py-24">
            <div className="container">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {featuredArticles.map((article, index) => (
                    <article 
                      key={index}
                      className={`p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow ${
                        article.featured ? "lg:flex lg:gap-8" : ""
                      }`}
                    >
                      {article.featured && (
                        <div className="lg:w-1/3 mb-6 lg:mb-0">
                          <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                            <span className="text-muted-foreground">Featured</span>
                          </div>
                        </div>
                      )}
                      <div className={article.featured ? "lg:w-2/3" : ""}>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <h2 className="font-heading text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {article.excerpt}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="p-6 bg-card rounded-2xl border border-border shadow-card">
                    <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Tag className="h-5 w-5 text-primary" />
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <button className="w-full text-left px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter */}
                  <div className="p-6 bg-primary text-primary-foreground rounded-2xl">
                    <h3 className="font-heading font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-teal-100 mb-4">
                      New articles every week covering school mental health, parenting teens, 
                      and student wellbeing.
                    </p>
                    <Link to="/contact">
                      <Button variant="hero" className="w-full">
                        Subscribe for Updates
                      </Button>
                    </Link>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-secondary rounded-2xl">
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      Need Help Now?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Free initial assessments available. Someone cares.
                    </p>
                    <Link to="/contact">
                      <Button className="w-full">
                        Get Help Today
                      </Button>
                    </Link>
                  </div>
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

export default Blog;
