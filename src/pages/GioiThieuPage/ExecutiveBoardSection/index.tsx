import backgroundExecutiveBoard from "@/assets/images/bg-home-page-tin-tuc.png";
import portrait from "@/assets/images/card-image-3.jpeg";
import { Typography } from "antd";

const ExecutiveBoardSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundExecutiveBoard})`,
      }}
    >
      <div className="flex flex-col px-[10%] w-full gap-28">
        <div className="flex items-center gap-48">
          <Typography className="text-[60px] font-extrabold">
            | BAN ĐIỀU HÀNH
          </Typography>
          <div className="flex flex-col gap-5 w-full h-full max-w-[300px] max-h-[300px] items-center">
            <div className="w-full h-full border-[2px] border-[#fff] p-4 rounded-[100%]">
              <img
                src={portrait}
                alt="portrait"
                className="rounded-[100%] w-full h-full max-w-[300px] max-h-[300px]"
              />
            </div>
            <Typography className="text-4xl font-extrabold">
              Lorem ipsum
            </Typography>
            <Typography className="text-xl font-light">
              Lorem ipsum dolor sit amet
            </Typography>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-5 w-full h-full max-w-[250px] max-h-[250px] items-center">
            <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
              <img
                src={portrait}
                alt="portrait"
                className="rounded-[100%] w-full h-full max-w-[250px] max-h-[250px]"
              />
            </div>
            <Typography className="text-4xl font-extrabold">
              Lorem ipsum
            </Typography>
            <Typography className="text-xl font-light">
              Lorem ipsum dolor sit amet
            </Typography>
          </div>
          <div className="flex flex-col gap-5 w-full h-full max-w-[250px] max-h-[250px] items-center">
            <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
              <img
                src={portrait}
                alt="portrait"
                className="rounded-[100%] w-full h-full max-w-[250px] max-h-[250px]"
              />
            </div>
            <Typography className="text-4xl font-extrabold">
              Lorem ipsum
            </Typography>
            <Typography className="text-xl font-light">
              Lorem ipsum dolor sit amet
            </Typography>
          </div>
          <div className="flex flex-col gap-5 w-full h-full max-w-[250px] max-h-[250px] items-center">
            <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
              <img
                src={portrait}
                alt="portrait"
                className="rounded-[100%] w-full h-full max-w-[250px] max-h-[250px]"
              />
            </div>
            <Typography className="text-4xl font-extrabold">
              Lorem ipsum
            </Typography>
            <Typography className="text-xl font-light">
              Lorem ipsum dolor sit amet
            </Typography>
          </div>
          <div className="flex flex-col gap-5 w-full h-full max-w-[250px] max-h-[250px] items-center">
            <div className="w-full h-full border-[2px] border-[#fff]  p-4 rounded-[100%]">
              <img
                src={portrait}
                alt="portrait"
                className="rounded-[100%] w-full h-full max-w-[250px] max-h-[250px]"
              />
            </div>
            <Typography className="text-4xl font-extrabold">
              Lorem ipsum
            </Typography>
            <Typography className="text-xl font-light">
              Lorem ipsum dolor sit amet
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveBoardSection;
