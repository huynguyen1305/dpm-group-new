import backgroundHomepage from "@/assets/images/homepage-background.png";

const BannerSection = () => {
  return <section className="w-full h-full bg-no-repeat bg-cover" style={{
    backgroundImage: `url(${backgroundHomepage})`
  }}></section>;
};

export default BannerSection;
