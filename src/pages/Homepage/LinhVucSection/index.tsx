import backgroundHomepage from "@/assets/images/bg-home-page-linh-vuc.png";
import cardImage1 from "@/assets/images/card-image-3.jpeg";
import { Col, Row, Typography } from "antd";
import styles from "./LinhVucSection.module.scss";
import { cn } from "@/utils/twClassname";

const LinhVucSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundHomepage})`,
      }}
    >
      <div className="container flex flex-col gap-14">
        <Typography className="text-[60px] font-extrabold">
          | LĨNH VỰC HOẠT ĐỘNG
        </Typography>
        <Typography className="text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Row gutter={[0, 0]} className="mt-10">
          <Col span={6} className="">
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
          <Col span={6} className="mt-12">
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
          <Col span={6} className="">
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
          <Col span={6} className="mt-12">
            <img
              alt="img"
              src={cardImage1}
              className={cn(
                styles.trapezoid_image,
                "w-full h-full max-h-[400px]"
              )}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LinhVucSection;
