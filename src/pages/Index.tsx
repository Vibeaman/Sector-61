import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import DonationSection from "@/components/DonationSection";
import WhitepaperSection from "@/components/WhitepaperSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <DonationSection />
      <WhitepaperSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
