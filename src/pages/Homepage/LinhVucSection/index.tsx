import backgroundHomepage from "@/assets/images/bg-home-page-linh-vuc.png";
import cardImage1 from "@/assets/images/card-image-3.jpeg";
import { Col, Row, Typography } from "antd";
import styles from "./LinhVucSection.module.scss";
import { cn } from "@/utils/twClassname";

const LinhVucSection = () => {
  return (
    <section className="w-full h-full pt-[80px]">
      <div
        className="w-full h-full bg-no-repeat bg-cover flex flex-col px-[80px]"
        style={{
          backgroundImage: `url(${backgroundHomepage})`,
        }}
      >
        <div className="container flex flex-col gap-14">
          <Typography className="text-[8vh] font-extrabold">
            | LĨNH VỰC HOẠT ĐỘNG
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
    </section>
  );
};

export default LinhVucSection;
