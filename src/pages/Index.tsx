import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CARESection from "@/components/home/CARESection";
import ProgramsSection from "@/components/home/ProgramsSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Serene MindCare | Youth Mental Health Care in Uganda</title>
        <meta 
          name="description" 
          content="Serene MindCare champions mental health for children, adolescents, and youth across Uganda through accessible, evidence-based psychotherapy, school programs, and community support." 
        />
        <meta name="keywords" content="mental health Uganda, youth mental health, child therapy Uganda, adolescent counseling, Serene MindCare, school mental health programs" />
        <link rel="canonical" href="https://serenemindcare.org" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CARESection />
          <ProgramsSection />
          <GallerySection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
