import backgroundValue from "@/assets/images/bg-home-page-tin-tuc.png";

const ValueSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundValue})`,
      }}
    ></div>
  );
};

export default ValueSection;
