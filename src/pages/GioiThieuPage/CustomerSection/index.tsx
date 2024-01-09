import backgroundCustomer from "@/assets/images/bg-home-page-tin-tuc.png";
import portrait from "@/assets/images/construct-bg-tin-tuc.png";
import { Carousel, Typography } from "antd";
import "./CustomerSection.scss";

const CustomerSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundCustomer})`,
      }}
    >
      <div className="flex flex-col px-[10%] w-full gap-10 h-[60vh]">
        <div className="flex flex-col gap-5 h-full">
          <Typography className="text-[60px] font-extrabold">
            | KHÁCH HÀNG & ĐỐI TÁC
          </Typography>
          <Typography className="text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat null
          </Typography>
        </div>
        <Carousel
          autoplay
          slidesToShow={4}
          slidesToScroll={1}
          dots
          infinite
          adaptiveHeight
          style={{ width: "100%", height: "300px" }}
        >
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-[100%] max-w-[250px]"
          />
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-[100%] max-w-[250px]"
          />
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-[100%] max-w-[250px]"
          />
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-[100%] max-w-[250px]"
          />
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-[100%] max-w-[250px]"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerSection;
