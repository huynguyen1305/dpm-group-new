import { Carousel, Typography } from "antd";
import backgroundHomepage from "@/assets/images/homepage-background.png";

const DuAnSection = () => {
  return (
    <div className="w-full flex flex-col justify-center h-full bg-[#354B99]">
      <div className="relative">
        <Typography className="py-2 px-8 border border-white rounded-2xl absolute z-10 top-10 left-[5%] cursor-pointer">
          XEM THÊM
        </Typography>
        <Typography className="py-4 px-10 bg-white absolute z-10 top-[-40px] right-[20%] text-[#354B99] font-extrabold text-6xl">
          DỰ ÁN NỔI BẬT
        </Typography>
        <Carousel arrows autoplay infinite autoplaySpeed={2000}>
          <img
            src={backgroundHomepage}
            alt="image"
            className="w-full max-h-[700px]"
          />
          <img
            src={backgroundHomepage}
            alt="image"
            className="w-full max-h-[700px]"
          />
          <img
            src={backgroundHomepage}
            alt="image"
            className="w-full max-h-[700px]"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default DuAnSection;
