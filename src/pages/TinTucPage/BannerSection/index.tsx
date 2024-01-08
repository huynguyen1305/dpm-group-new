import backgroundTintuc from "@/assets/images/bg-tin-tuc.png";
import constructTintuc from "@/assets/images/construct-bg-tin-tuc.png";
import { Typography } from "antd";

const BannerSection = () => {
  return (
    <section
      className="w-full h-[100vh] bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundTintuc})`,
      }}
    >
      <div className="container flex flex-col h-full pt-[40vh] pb-10 justify-between pl-[7.5%]">
        <div className="flex flex-col gap-2">
          <Typography className="font-extrabold text-8xl">TIN TỨC</Typography>
          <div className="flex items-center gap-2">
            <Typography className="text-2xl font-extralight">
              Trang chủ
            </Typography>
            <Typography className="text-2xl font-medium">{">"}</Typography>
            <Typography className="text-2xl font-medium">Tin tức</Typography>
          </div>
        </div>
        <div className="flex items-center gap-16 relative">
          <Typography className="font-medium text-4xl">Lorem Ipsum</Typography>
          <Typography className="font-medium text-4xl">Lorem Ipsum</Typography>
          <Typography className="font-medium text-4xl">Lorem Ipsum</Typography>
          <img
            alt="image-construction"
            src={constructTintuc}
            className="max-w-[880px] h-[680px] absolute right-[-20%]"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
