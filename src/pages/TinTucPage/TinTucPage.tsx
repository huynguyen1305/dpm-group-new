import FooterSection from "@/components/FooterSection";
import BannerSection from "./BannerSection";
import GridSection from "./GridSection";

const TinTucPage = () => {
  return (
    <div className="w-full h-full relative">
      <BannerSection />
      <GridSection />
      <FooterSection />
    </div>
  );
};

export default TinTucPage;
