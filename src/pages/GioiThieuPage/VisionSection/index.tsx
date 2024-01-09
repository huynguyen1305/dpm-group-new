import backgroundVision from "@/assets/images/bg-home-page-tin-tuc.png";

const VisionSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundVision})`,
      }}
    ></div>
  );
};

export default VisionSection;
