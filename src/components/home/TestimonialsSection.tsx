import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Our school's suicide ideation dropped 28% after implementing Serene Minds Thrive modules. Attendance improved significantly.",
      author: "Headteacher Sarah N.",
      role: "Kampala Secondary School",
      rating: 5,
    },
    {
      quote: "Mental Health Spot gave my daughter language for her anxiety. She started therapy after hearing Tuesday's discussion.",
      author: "Anonymous Parent",
      role: "Parent of Teen",
      rating: 5,
    },
    {
      quote: "The Buddy 2 Buddy program has transformed how our students handle conflicts. Bullying incidents have decreased remarkably.",
      author: "Teacher James K.",
      role: "Primary School Educator",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transforming Lives Across Uganda
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from schools, parents, and educators who've experienced our impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Highlight */}
        <div className="mt-16 p-8 bg-primary rounded-2xl text-primary-foreground">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading text-4xl font-bold mb-2">30%</div>
              <div className="text-primary-foreground/80">Reduction in absenteeism</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-bold mb-2">28%</div>
              <div className="text-primary-foreground/80">Drop in suicide ideation</div>
            </div>
            <div>
              <div className="font-heading text-4xl font-bold mb-2">84+</div>
              <div className="text-primary-foreground/80">Caregivers trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
