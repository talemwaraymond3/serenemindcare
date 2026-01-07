import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode, Children, cloneElement, isValidElement } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.initialDelay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
}: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      custom={{ staggerDelay, initialDelay }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
};

export default StaggerContainer;
