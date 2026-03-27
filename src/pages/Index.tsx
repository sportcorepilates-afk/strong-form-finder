import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import WhyStrongSection from "@/components/WhyStrongSection";
import WorkoutCarousel from "@/components/WorkoutCarousel";


import FranchiseSection from "@/components/FranchiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Sport Core Pilates | Pilates First. Performance Driven.</title>
        <meta name="description" content="Performance-focused Pilates for active adults and athletes in Mumbai. Train stronger, move better, stay injury-resilient." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sport Core Pilates" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content="https://sportcorepilates.com/" />
        <meta property="og:title" content="Sport Core Pilates | Pilates First. Performance Driven." />
        <meta property="og:description" content="Performance-focused Pilates for active adults and athletes in Mumbai. Train stronger, move better, stay injury-resilient." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sportcorepilates.com/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      
      <WhyStrongSection />
      <WorkoutCarousel />
      
      
      <FranchiseSection />
      <Footer />
    </main>
  );
};

export default Index;
