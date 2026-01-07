import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone, Calendar } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const CTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5, ease: smoothEase },
    },
  };

  const actionCards = [
    {
      title: "For Schools",
      description: "Free needs assessment for January term. Transform your campus into a mental health safe space.",
      link: "/services",
      linkText: "Start Free Assessment",
    },
    {
      title: "For Individuals",
      description: "Free first consultation. Individual, group, and family therapy available in-person and virtually.",
      link: "/contact",
      linkText: "Book Consultation",
    },
    {
      title: "Join Our Tuesday X Space",
      description: "Every Tuesday 8PM EAT @serenemindcare1. Connect with experts and join the conversation.",
      link: "https://x.com/serenemindcare1",
      linkText: "Follow on X",
      external: true,
      icon: Calendar,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-3xl gradient-hero p-12 lg:p-16"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.7, ease: smoothEase }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          {/* Floating Elements */}
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 bg-teal-300/10 rounded-full blur-2xl"
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"
            animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <motion.div
            className="relative grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Content */}
            <motion.div variants={contentVariants}>
              <motion.h2
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-50 mb-6"
                variants={contentVariants}
              >
                Ready to Make a Difference?
              </motion.h2>
              <motion.p
                className="text-lg text-teal-100 mb-8 leading-relaxed"
                variants={contentVariants}
              >
                Whether you're a school looking to transform your campus, a parent seeking support,
                or someone who wants to help — we're here for you.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={contentVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      <Phone className="h-5 w-5" />
                      Get Help Today
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to="/donate">
                    <Button variant="heroOutline" size="lg">
                      <Heart className="h-5 w-5" />
                      Support Our Mission
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Action Cards */}
            <motion.div className="grid gap-4" variants={containerVariants}>
              {actionCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    x: 8,
                    backgroundColor: "rgba(240, 253, 250, 0.15)",
                    transition: { duration: 0.3 },
                  }}
                  className="p-6 bg-teal-50/10 rounded-2xl border border-teal-50/20 backdrop-blur-sm"
                >
                  <h3 className="font-heading font-semibold text-teal-50 mb-2 flex items-center gap-2">
                    {card.icon && <card.icon className="h-5 w-5 text-accent" />}
                    {card.title}
                  </h3>
                  <p className="text-teal-200 mb-4">{card.description}</p>
                  {card.external ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium inline-flex items-center gap-2 group"
                    >
                      {card.linkText}
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </a>
                  ) : (
                    <Link
                      to={card.link}
                      className="text-accent font-medium inline-flex items-center gap-2 group"
                    >
                      {card.linkText}
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
