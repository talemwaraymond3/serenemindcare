import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface HoverScaleProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  scale?: number;
  className?: string;
}

export const HoverScale = ({
  children,
  scale = 1.03,
  className = "",
  ...props
}: HoverScaleProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default HoverScale;
