import backgroundHistory from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/card-image-1.png";
import { Typography } from "antd";

const HistorySection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col items-center gap-14 pt-[12.5vh]"
      style={{
        backgroundImage: `url(${backgroundHistory})`,
      }}
    >
      <div className="container flex flex-col gap-5">
        <Typography className="text-6xl font-extrabold">
          | LỊCH SỬ HÌNH THÀNH
        </Typography>
        <Typography className="text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat null
        </Typography>
      </div>
      <div className="flex items-end gap-5">
        <div className="flex flex-col justify-center items-center max-w-[320px] text-center gap-2">
          <Typography className="text-4xl font-extrabold">
            Lorem ipsum
          </Typography>
          <Typography className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
        </div>
        <img
          alt="img"
          src={image}
          className="rounded-[100%] w-[220px] h-[220px]"
        />
        <div className="flex flex-col justify-center items-center max-w-[320px] text-center gap-2">
          <Typography className="text-4xl font-extrabold">
            Lorem ipsum
          </Typography>
          <Typography className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
        </div>
      </div>
      <div className="relative border-t-[3px] border-white w-[80vw]">
        <div className="w-6 h-6 rounded-[100%] bg-white absolute top-[-13px]" />
        <div className="h-[55px] border-dashed border-l-[3px] border-white absolute bottom-[-55px] right-[24.75vw]" />
        <div className="h-[55px] border-dashed border-l-[3px] border-white absolute bottom-[-55px] left-[24.75vw]" />
        <div className="w-8 h-8 rounded-[100%] bg-white absolute top-[-17px] right-[24vw] border-[3px] border-black" />
        <div className="w-8 h-8 rounded-[100%] bg-white absolute top-[-17px] left-[24vw] border-[3px] border-black" />
        <div className="h-[55px] border-dashed border-l-[3px] border-white absolute top-[-55px] right-[50%]" />
        <div className="w-8 h-8 rounded-[100%] bg-white absolute top-[-17px] right-0 left-0 mx-auto border-[3px] border-black" />
        <div className="w-6 h-6 rounded-[100%] bg-white absolute top-[-13px] right-0" />
      </div>
      <div className="flex items-end gap-5">
        <img
          alt="img"
          src={image}
          className="rounded-[100%] w-[220px] h-[220px]"
        />
        <div className="flex flex-col justify-center items-center max-w-[320px] text-center gap-2">
          <Typography className="text-4xl font-extrabold">
            Lorem ipsum
          </Typography>
          <Typography className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>
        </div>
        <img
          alt="img"
          src={image}
          className="rounded-[100%] w-[220px] h-[220px]"
        />
      </div>
    </div>
  );
};

export default HistorySection;
