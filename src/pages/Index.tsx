import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StrengthsSection from "@/components/StrengthsSection";
import TarkaDiamantSection from "@/components/TarkaDiamantSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import WhyVoltecSection from "@/components/WhyVoltecSection";
import InstallerSection from "@/components/InstallerSection";
import KeyFiguresSection from "@/components/KeyFiguresSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StrengthsSection />
      <TarkaDiamantSection />
      <ManufacturingSection />
      <WhyVoltecSection />
      <InstallerSection />
      <KeyFiguresSection />
      <Footer />
    </div>
  );
};

export default Index;
