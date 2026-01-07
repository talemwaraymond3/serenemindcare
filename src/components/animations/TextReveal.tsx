import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const TextReveal = ({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.03,
  once = true,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  // If children is a string, split into words
  if (typeof children === "string") {
    const words = children.split(" ");
    
    return (
      <motion.span
        ref={ref}
        className={className}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
            {index < words.length - 1 && <span>&nbsp;</span>}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // For non-string children, just fade in
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 20, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
