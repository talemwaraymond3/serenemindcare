import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, CreditCard, Building, Globe, ArrowRight } from "lucide-react";

const Donate = () => {
  const impactLevels = [
    { amount: "$10", description: "Provides mental health books for classroom use" },
    { amount: "$50", description: "Funds one teacher training session" },
    { amount: "$100", description: "Sponsors free school assessment" },
    { amount: "$500", description: "Supports one week of X Spaces" },
    { amount: "$1,000,000", description: "Builds our youth mental health center" },
  ];

  const results = [
    { value: "30%", label: "Absenteeism reduction" },
    { value: "28%", label: "Suicide ideation drop" },
    { value: "200+", label: "X Space discussions" },
    { value: "10+", label: "Schools transformed" },
  ];

  return (
    <>
      <Helmet>
        <title>Donate | Serene MindCare - Support Youth Mental Health in Uganda</title>
        <meta 
          name="description" 
          content="Support youth mental health in Uganda. Your donation funds school programs, therapy services, and mental health education. 100% of donations fund programs." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 gradient-hero overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="container relative">
              <div className="max-w-3xl text-center mx-auto">
                <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-2xl mx-auto mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6">
                  Support Youth Mental Health in Uganda
                </h1>
                <p className="text-xl text-teal-100 leading-relaxed">
                  Your gift transforms young lives through our CARE approach. 
                  100% of donations fund programs — no admin fees taken.
                </p>
              </div>
            </div>
          </section>

          {/* Impact Levels */}
          <section className="py-24">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
                  Your Impact
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Every Gift Makes a Difference
                </h2>
                <p className="text-lg text-muted-foreground">
                  See how your donation directly supports young people's mental health across Uganda.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {impactLevels.map((level, index) => (
                  <div 
                    key={index}
                    className="p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow text-center"
                  >
                    <div className="font-heading text-4xl font-bold text-primary mb-4">
                      {level.amount}
                    </div>
                    <p className="text-foreground">{level.description}</p>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div className="p-8 bg-primary rounded-2xl text-primary-foreground">
                <h3 className="font-heading text-xl font-semibold text-center mb-8">
                  Proven Results from Your Support
                </h3>
                <div className="grid sm:grid-cols-4 gap-6 text-center">
                  {results.map((result, index) => (
                    <div key={index}>
                      <div className="font-heading text-4xl font-bold mb-2">{result.value}</div>
                      <div className="text-primary-foreground/80">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Payment Options */}
          <section className="py-24 bg-muted/30">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Payment Options
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the method that works best for you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-8 bg-card rounded-2xl border border-border shadow-card">
                  <Phone className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Mobile Money
                  </h3>
                  <p className="text-muted-foreground mb-4">MTN MoMo / Airtel Money</p>
                  <p className="font-semibold text-foreground">+256 708-248-371</p>
                </div>

                <div className="p-8 bg-card rounded-2xl border border-border shadow-card">
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Bank Transfer
                  </h3>
                  <p className="text-muted-foreground mb-4">Serene MindCare Network Ltd</p>
                  <p className="text-sm text-muted-foreground">Details provided upon contact</p>
                </div>

                <div className="p-8 bg-card rounded-2xl border border-border shadow-card">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    International Donors
                  </h3>
                  <p className="text-muted-foreground mb-4">PayPal</p>
                  <p className="font-semibold text-foreground text-sm">serenemindcare5@gmail.com</p>
                </div>

                <div className="p-8 bg-card rounded-2xl border border-border shadow-card">
                  <CreditCard className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Corporate Partners
                  </h3>
                  <p className="text-muted-foreground mb-4">School program sponsorships available</p>
                  <a href="mailto:serenemindcare5@gmail.com" className="text-primary font-medium hover:underline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="p-12 bg-secondary rounded-2xl">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    Make Your Gift Today
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Every donation fuels our CARE approach: 
                    <span className="text-primary"> Collaborate</span> (school partnerships) | 
                    <span className="text-accent"> Advocate</span> (X Spaces) | 
                    <span className="text-teal-600"> Rehabilitate</span> (clinical care) | 
                    <span className="text-teal-400"> Educate</span> (books/workshops)
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+256708248371">
                      <Button variant="accent" size="lg">
                        <Phone className="h-5 w-5" />
                        Call to Donate
                      </Button>
                    </a>
                    <a href="mailto:serenemindcare5@gmail.com">
                      <Button size="lg">
                        <Mail className="h-5 w-5" />
                        Email Us
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Tax Deductible: Receipts issued for all contributions
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

export default Donate;
