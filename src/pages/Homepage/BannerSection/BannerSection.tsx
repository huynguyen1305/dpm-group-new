import backgroundHomepage from "@/assets/images/homepage-background.png";

const BannerSection = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div className="w-full h-full">
        <img alt="img" src={backgroundHomepage} className="w-full h-full" />
      </div>
    </section>
  );
};

export default BannerSection;
