import schoolEvent from "@/assets/gallery/school-event.jpg";
import communityMeeting from "@/assets/gallery/community-meeting.jpg";
import childrenSession from "@/assets/gallery/children-session.jpg";
import classroomEngagement from "@/assets/gallery/classroom-engagement.jpg";
import mentalHealthAwareness from "@/assets/gallery/mental-health-awareness.jpg";
import youthOutreach from "@/assets/gallery/youth-outreach.jpg";
import schoolSession from "@/assets/gallery/school-session.jpg";
import teamVisit from "@/assets/gallery/team-visit.jpg";
import teamPhoto from "@/assets/gallery/team-photo.jpg";
import prioritySession from "@/assets/gallery/priority-session.jpg";
import { Camera } from "lucide-react";

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
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
            <Camera className="h-4 w-4" />
            Our Impact in Action
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transforming Lives Across Uganda
          </h2>
          <p className="text-lg text-muted-foreground">
            Witness the real impact of our programs through the communities, schools, and young people we serve.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm sm:text-base">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
