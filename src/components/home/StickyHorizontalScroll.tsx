import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, School, Users, Brain, Heart, Sparkles, BookOpen } from "lucide-react";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const features = [
  {
    icon: School,
    title: "School Programs",
    description: "Transform your campus into a mental health safe space with our evidence-based modules.",
    color: "bg-primary",
    link: "/services#smt",
  },
  {
    icon: Users,
    title: "Peer Support",
    description: "Train student ambassadors and peer mentors to create supportive communities.",
    color: "bg-accent",
    link: "/services#peer",
  },
  {
    icon: Brain,
    title: "Clinical Therapy",
    description: "Individual, group, and family therapy with licensed psychotherapists.",
    color: "bg-teal-600",
    link: "/services#clinical",
  },
  {
    icon: Heart,
    title: "Crisis Support",
    description: "24/7 crisis intervention and emergency mental health response.",
    color: "bg-rose-500",
    link: "/contact",
  },
  {
    icon: Sparkles,
    title: "Wellness Programs",
    description: "Holistic approach to mental wellness including mindfulness and stress management.",
    color: "bg-amber-500",
    link: "/services#wellness",
  },
  {
    icon: BookOpen,
    title: "Resources",
    description: "Free educational materials, workbooks, and mental health guides.",
    color: "bg-teal-400",
    link: "/resources",
  },
];

const StickyHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-muted/20">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Section Header */}
        <motion.div
          className="container text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span
            variants={headerVariants}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full"
          >
            How We Help
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Comprehensive Support System
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From prevention to intervention, we provide a full spectrum of mental health services.
          </motion.p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div style={{ opacity }} className="relative">
          <motion.div
            style={{ x }}
            className="flex gap-6 px-8 md:px-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[400px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: smoothEase }}
              >
                <Link to={feature.link}>
                  <motion.div
                    className="h-full p-8 bg-card rounded-2xl border border-border shadow-card group cursor-pointer"
                    whileHover={{
                      y: -8,
                      boxShadow: "0 20px 50px -15px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3, ease: smoothEase },
                    }}
                  >
                    <motion.div
                      className={`flex items-center justify-center w-14 h-14 ${feature.color} text-white rounded-xl shadow-soft mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="h-7 w-7" />
                    </motion.div>

                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="container mt-12">
          <div className="flex justify-center gap-2">
            {features.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/20"
                style={{
                  backgroundColor: useTransform(
                    scrollYProgress,
                    [
                      index / features.length,
                      (index + 0.5) / features.length,
                      (index + 1) / features.length,
                    ],
                    ["hsl(var(--primary) / 0.2)", "hsl(var(--primary))", "hsl(var(--primary) / 0.2)"]
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyHorizontalScroll;
