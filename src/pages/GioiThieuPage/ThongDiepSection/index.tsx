import backgroundThongDiep from "@/assets/images/bg-home-page-tin-tuc.png";
import image from "@/assets/images/homepage-background.png";
import imageBg from "@/assets/images/white-background.jpg";
import { cn } from "@/utils/twClassname";
import { Typography } from "antd";
import styles from "./ThongDiep.module.scss";
import iconLogo from "@/assets/icons/logo-circle.svg";

const ThongDiepSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex items-center relative"
      style={{
        backgroundImage: `url(${backgroundThongDiep})`,
      }}
    >
      <div className="flex flex-col gap-10 max-h-[70vh] z-10 absolute left-[15vw]">
        <Typography className="text-6xl font-extrabold">
          | THÔNG ĐIỆP CHỦ TỊCH
        </Typography>
        <img
          src={image}
          alt=""
          className={cn(
            styles.trapezoid_image,
            "w-full max-w-[750px] h-[70vh]"
          )}
        />
      </div>
      <div className="w-[50vw] h-[85vh] absolute right-[8vw] top-[10vh]">
        <img
          alt="background"
          src={imageBg}
          className={cn(styles.trapezoid_image, "w-full h-full")}
        />
        <img
          alt="background"
          src={iconLogo}
          className={cn(
            styles,
            "w-full h-full max-w-[145px] max-h-[145px] absolute top-0 right-[2.5vw]"
          )}
        />
        <div className="flex flex-col gap-5 absolute top-[22.5vh] right-[10.5vw] max-w-[500px]">
          <Typography className="text-4xl font-extrabold text-[#17275D]">
            Lorem ipsum dolor sit
          </Typography>
          <Typography className="text-xl font-light text-[#17275D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ThongDiepSection;
