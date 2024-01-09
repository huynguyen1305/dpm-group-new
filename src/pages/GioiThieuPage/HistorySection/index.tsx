import backgroundHistory from "@/assets/images/bg-home-page-tin-tuc.png";

const HistorySection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundHistory})`,
      }}
    ></div>
  );
};

export default HistorySection;
