import { Users, Megaphone, HeartHandshake, BookOpen } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const CARESection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const careItems = [
    {
      letter: "C",
      title: "Collaborate",
      subtitle: "School & Community Partnerships",
      description: "Work hand-in-hand with schools, parents, teachers, and peer leaders to create supportive environments where young people thrive.",
      icon: Users,
      color: "bg-teal-500",
    },
    {
      letter: "A",
      title: "Advocate",
      subtitle: "Policy Reform & Stigma Reduction",
      description: "Champion youth mental health through Mental Health Spot X Spaces, National LIVE Conference, and policy briefs.",
      icon: Megaphone,
      color: "bg-accent",
    },
    {
      letter: "R",
      title: "Rehabilitate",
      subtitle: "Clinical Treatment & Recovery",
      description: "Deliver evidence-based psychotherapy, neurological support, crisis intervention, and residential programs.",
      icon: HeartHandshake,
      color: "bg-teal-600",
    },
    {
      letter: "E",
      title: "Educate",
      subtitle: "Mental Health Literacy",
      description: "Build knowledge through our books, multilingual resources, workshops, and digital campaigns.",
      icon: BookOpen,
      color: "bg-teal-400",
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
      transition: {
        duration: 0.6,
        ease: smoothEase,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: smoothEase,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30 overflow-hidden">
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
            Our Guiding Framework
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            We <span className="text-primary">CARE</span> for Uganda's Youth Mental Health
          </motion.h2>
          <motion.p variants={headerVariants} className="text-lg text-muted-foreground">
            Our philosophy drives everything we do — from school programs to policy advocacy.
          </motion.p>
        </motion.div>

        {/* CARE Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {careItems.map((item, index) => (
            <motion.div
              key={item.letter}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: smoothEase },
              }}
              className="group relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Letter Badge */}
              <motion.div
                className={`absolute -top-4 left-6 flex items-center justify-center w-12 h-12 ${item.color} text-primary-foreground rounded-xl font-heading text-2xl font-bold shadow-soft`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item.letter}
              </motion.div>

              {/* Content */}
              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {item.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: smoothEase }}
        >
          <p className="text-xl font-heading font-semibold text-foreground">
            <motion.span
              className="text-primary inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Collaborate.
            </motion.span>{" "}
            <motion.span
              className="text-accent inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Advocate.
            </motion.span>{" "}
            <motion.span
              className="text-teal-600 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Rehabilitate.
            </motion.span>{" "}
            <motion.span
              className="text-teal-400 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Educate.
            </motion.span>{" "}
            That's how we <span className="text-primary">"CARE."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CARESection;
