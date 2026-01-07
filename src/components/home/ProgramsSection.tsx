import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, School, Mic, Stethoscope, BookOpen } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const ProgramsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const programs = [
    {
      icon: School,
      title: "Serene Minds Thrive",
      tag: "Flagship Program",
      description: "Transforming Ugandan schools (P4-S6) into mental health safe spaces for ages 7-20. Includes Buddy 2 Buddy, Brain 2 Brain, and Balance 2 Balance modules.",
      features: ["Student wellness workshops", "Teacher training", "Parent engagement", "Peer mentor clubs"],
      link: "/services#smt",
      color: "bg-primary",
    },
    {
      icon: Mic,
      title: "Mental Health Spot",
      tag: "Weekly X Spaces",
      description: "Every Tuesday 8PM EAT — creating stigma-free conversations about mental health for young people. 200+ discussions hosted with 150+ expert speakers.",
      features: ["Live Q&A sessions", "Expert speakers", "Recorded archives", "Global reach"],
      link: "/services#mental-health-spot",
      color: "bg-accent",
    },
    {
      icon: Stethoscope,
      title: "Clinical Services",
      tag: "Treatment & Rehabilitation",
      description: "Individual, group, family, and residential support for ages 7-24. Evidence-based psychotherapy, crisis intervention, and recovery pathways.",
      features: ["CBT & DBT therapy", "Play therapy (ages 7-12)", "Family therapy", "Crisis intervention"],
      link: "/services#clinical",
      color: "bg-teal-600",
    },
    {
      icon: BookOpen,
      title: "Key Publications",
      tag: "Educational Resources",
      description: "Evidence-based mental health books powering our school programs: Buddy 2 Buddy, Brain 2 Brain, and Balance 2 Balance workbooks.",
      features: ["Anti-bullying prevention", "Substance resistance", "Stress regulation", "Free resources"],
      link: "/resources",
      color: "bg-teal-400",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: smoothEase,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: smoothEase,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="max-w-2xl">
            <motion.span
              variants={headerVariants}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full"
            >
              Services & Programs
            </motion.span>
            <motion.h2
              variants={headerVariants}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Comprehensive Mental Health Support
            </motion.h2>
            <motion.p variants={headerVariants} className="text-lg text-muted-foreground">
              From school programs to clinical services, we provide accessible care at every level.
            </motion.p>
          </div>
          <motion.div variants={headerVariants}>
            <Link to="/services">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: smoothEase },
              }}
            >
              <Link
                to={program.link}
                className="group block p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className={`flex items-center justify-center w-14 h-14 ${program.color} text-primary-foreground rounded-xl shadow-soft`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <program.icon className="h-7 w-7" />
                  </motion.div>
                  <div>
                    <span className="inline-block px-2 py-0.5 mb-1 text-xs font-medium text-primary bg-secondary rounded">
                      {program.tag}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="grid grid-cols-2 gap-2">
                  {program.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-sm text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border flex items-center text-primary font-medium">
                  Learn More
                  <motion.span
                    className="ml-2 inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
