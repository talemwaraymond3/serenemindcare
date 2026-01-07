import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Camera } from "lucide-react";
import schoolEvent from "@/assets/gallery/school-event.jpg";
import communityMeeting from "@/assets/gallery/community-meeting.jpg";
import childrenSession from "@/assets/gallery/children-session.jpg";
import classroomEngagement from "@/assets/gallery/classroom-engagement.jpg";
import mentalHealthAwareness from "@/assets/gallery/mental-health-awareness.jpg";
import youthOutreach from "@/assets/gallery/youth-outreach.jpg";
import teamPhoto from "@/assets/gallery/team-photo.jpg";
import prioritySession from "@/assets/gallery/priority-session.jpg";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const galleryImages = [
  {
    src: mentalHealthAwareness,
    alt: "Students holding Mental Health is Wealth sign",
    caption: "Mental Health Awareness Campaign",
  },
  {
    src: classroomEngagement,
    alt: "Engaged students in classroom session",
    caption: "Interactive School Workshops",
  },
  {
    src: communityMeeting,
    alt: "Community outreach meeting with parents",
    caption: "Community Parent Engagement",
  },
  {
    src: childrenSession,
    alt: "Psychosocial support team with young children",
    caption: "Early Childhood Support",
  },
  {
    src: schoolEvent,
    alt: "Students at mental health event",
    caption: "School Program Celebration",
  },
  {
    src: teamPhoto,
    alt: "Serene MindCare team members",
    caption: "Our Dedicated Team",
  },
  {
    src: prioritySession,
    alt: "Mental health session with students",
    caption: "Your Mental Health Is Our Priority",
  },
  {
    src: youthOutreach,
    alt: "Staff member with youth in community",
    caption: "Youth Community Outreach",
  },
];

const GallerySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: smoothEase },
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
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full"
          >
            <Camera className="h-4 w-4" />
            Our Impact in Action
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Transforming Lives Across Uganda
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-lg text-muted-foreground"
          >
            Witness the real impact of our programs through the communities, schools, and young people we serve.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                zIndex: 10,
                transition: { duration: 0.3, ease: smoothEase },
              }}
              className={`relative group overflow-hidden rounded-2xl shadow-card cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <p className="text-white font-medium text-sm sm:text-base">
                    {image.caption}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
