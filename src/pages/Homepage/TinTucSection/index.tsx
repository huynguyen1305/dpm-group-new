import { Col, Flex, Image, Row, Typography } from "antd";
import backgroundHomepage from "@/assets/images/bg-home-page-tin-tuc.png";
import cardImage1 from "@/assets/images/card-image-1.png";
import cardImage2 from "@/assets/images/card-image-2.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const TinTucSection = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundHomepage})`,
      }}
    >
      <div className="container flex flex-col gap-10">
        <Typography className="text-[60px] font-extrabold">
          | TIN TỨC
        </Typography>
        <Flex items="center" gap={40}>
          <Flex vertical className="w-2/5">
            <Image alt="img" src={cardImage1} preview={false} />
            <Flex vertical className="bg-white p-10" gap={20}>
              <Typography className="text-4xl font-semibold text-[#354B99]">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography className="text-xl text-[#354B99]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, q
              </Typography>
              <div className="w-fit flex items-center gap-5 cursor-pointer">
                <Typography className="text-base font-extrabold text-[#354B99]">
                  READ MORE
                </Typography>
                <ArrowRightOutlined style={{ color: "#354B99" }} />
              </div>
            </Flex>
          </Flex>
          <Row gutter={[20, 20]} className="w-3/5" align="middle">
            <Col span={24}>
              <Flex>
                <div className="flex items-center w-full">
                  <Image
                    src={cardImage2}
                    alt="img"
                    preview={false}
                    className="h-full"
                  />
                  <div className="flex flex-col gap-10 px-5 bg-white h-full justify-center">
                    <div className="flex flex-col gap-2">
                      <Typography className=" text-[#354B99] text-2xl font-semibold">
                        Lorem ipsum dolor sit amet
                      </Typography>
                      <Typography className=" text-xl text-[#354B99]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </Typography>
                    </div>

                    <div className="w-fit flex items-center gap-5 cursor-pointer">
                      <Typography className="text-base font-extrabold text-[#354B99] ">
                        READ MORE
                      </Typography>
                      <ArrowRightOutlined style={{ color: "#354B99" }} />
                    </div>
                  </div>
                </div>
              </Flex>
            </Col>
            <Col span={24}>
              <Flex>
                <div className="flex items-center w-full">
                  <Image
                    src={cardImage2}
                    alt="img"
                    preview={false}
                    className="h-full"
                  />
                  <div className="flex flex-col gap-10 px-5 bg-white h-full justify-center">
                    <div className="flex flex-col gap-2">
                      <Typography className=" text-[#354B99] text-2xl font-semibold">
                        Lorem ipsum dolor sit amet
                      </Typography>
                      <Typography className=" text-xl text-[#354B99]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </Typography>
                    </div>

                    <div className="w-fit flex items-center gap-5 cursor-pointer">
                      <Typography className="text-base font-extrabold text-[#354B99] ">
                        READ MORE
                      </Typography>
                      <ArrowRightOutlined style={{ color: "#354B99" }} />
                    </div>
                  </div>
                </div>
              </Flex>
            </Col>
            <Col span={24}>
              <Flex>
                <div className="flex items-center w-full">
                  <Image
                    src={cardImage2}
                    alt="img"
                    preview={false}
                    className="h-full"
                  />
                  <div className="flex flex-col gap-10 px-5 bg-white h-full justify-center">
                    <div className="flex flex-col gap-2">
                      <Typography className=" text-[#354B99] text-2xl font-semibold">
                        Lorem ipsum dolor sit amet
                      </Typography>
                      <Typography className=" text-xl text-[#354B99]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore
                      </Typography>
                    </div>

                    <div className="w-fit flex items-center gap-5 cursor-pointer">
                      <Typography className="text-base font-extrabold text-[#354B99] ">
                        READ MORE
                      </Typography>
                      <ArrowRightOutlined style={{ color: "#354B99" }} />
                    </div>
                  </div>
                </div>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </div>
    </div>
  );
};

export default TinTucSection;
