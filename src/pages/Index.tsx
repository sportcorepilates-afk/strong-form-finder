import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AsSeenIn from "@/components/AsSeenIn";
import WhyStrongSection from "@/components/WhyStrongSection";
import WorkoutCarousel from "@/components/WorkoutCarousel";
import AboutSection from "@/components/AboutSection";
import StudioFinder from "@/components/StudioFinder";
import FranchiseSection from "@/components/FranchiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AsSeenIn />
      <WhyStrongSection />
      <WorkoutCarousel />
      <AboutSection />
      <StudioFinder />
      <FranchiseSection />
      <Footer />
    </main>
  );
};

export default Index;
