import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const testimonials = [
    {
      quote: "Our school's suicide ideation dropped 28% after implementing Serene Minds Thrive modules. Attendance improved significantly.",
      author: "Teacher Grace M.",
      role: "Secondary School Educator",
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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: smoothEase },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  const counterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15, ease: smoothEase },
    }),
  };

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full"
          >
            Success Stories
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Transforming Lives Across Uganda
          </motion.h2>
          <motion.p variants={headerVariants} className="text-lg text-muted-foreground">
            Real stories from schools, parents, and educators who've experienced our impact.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: smoothEase },
              }}
              className="relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              </motion.div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Star className="h-5 w-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <motion.div
                className="pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              >
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Highlight */}
        <motion.div
          className="mt-16 p-8 bg-primary rounded-2xl text-primary-foreground overflow-hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={statsVariants}
        >
          <motion.div
            className="grid sm:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            {[
              { value: "30%", label: "Reduction in absenteeism" },
              { value: "28%", label: "Drop in suicide ideation" },
              { value: "84+", label: "Caregivers trained" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={counterVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="font-heading text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.5, ease: smoothEase }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
