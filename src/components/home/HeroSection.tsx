import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Users, Mic, School, Heart } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import heroTeam from "@/assets/hero-team.png";

// Smooth easing curve similar to Fruitful
const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const stats = [
    { icon: Mic, value: "200+", label: "Mental Health Discussions" },
    { icon: Users, value: "150+", label: "Expert Speakers Featured" },
    { icon: School, value: "10+", label: "Schools Transformed" },
    { icon: Heart, value: "Free", label: "Assessments Available" },
  ];

  // Stagger animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: smoothEase,
      },
    },
  };

  const headlineWords = "Every Young Person's Mental Health".split(" ");

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image - Clear, no fading */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroTeam})`,
        }}
      />
      
      {/* Gradient Overlay - Static */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/70" />

      {/* Floating Elements with enhanced animation */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/10 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container relative py-24 lg:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-teal-50/10 border border-teal-50/20 backdrop-blur-sm"
          >
            <motion.span
              className="flex h-2 w-2 rounded-full bg-accent"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-teal-50">
              Transforming Youth Mental Health in Uganda
            </span>
          </motion.div>

          {/* Headline with word-by-word reveal */}
          <motion.h1 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-50 mb-6"
            variants={itemVariants}
          >
            <span className="block">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.05,
                    ease: smoothEase,
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.8, ease: smoothEase }}
            >
              Matters
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <motion.path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="hsl(45 90% 55%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                />
              </motion.svg>
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-teal-100 mb-10 max-w-2xl mx-auto"
          >
            Serene Minds Thrive — Transforming lives across Uganda through accessible,
            evidence-based mental health care for children, adolescents, and youth.
          </motion.p>

          {/* CTA Buttons with stagger */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/services">
                <Button variant="hero" size="xl">
                  Free School Assessment
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  <Phone className="h-5 w-5" />
                  Get Help Today
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/events">
                <Button variant="heroOutline" size="xl">
                  <Calendar className="h-5 w-5" />
                  Join Tuesday X Space
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats with stagger animation */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: smoothEase,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(240, 253, 250, 0.12)",
                  transition: { duration: 0.3 },
                }}
                className="p-6 rounded-2xl bg-teal-50/5 border border-teal-50/10 backdrop-blur-sm cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                </motion.div>
                <motion.div
                  className="font-heading text-3xl font-bold text-teal-50 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-teal-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-teal-50/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-teal-50/50 rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
