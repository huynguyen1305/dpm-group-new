import backgroundThongDiep from "@/assets/images/bg-home-page-tin-tuc.png";

const ThongDiepSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundThongDiep})`,
      }}
    ></div>
  );
};

export default ThongDiepSection;
