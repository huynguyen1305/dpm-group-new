import { cn } from "@/utils/twClassname";
import styles from "./VeChungToiSection.module.scss";
import { Typography } from "antd";
import backgroundHomepage from "@/assets/images/homepage-background.png";

const VeChungToiSection = () => {
  return (
    <section className="h-full w-full bg-[#fff] p-10 flex">
      <div className="w-[25%] bg-inherit relative">
        <div
          className={cn(
            styles.rotate,
            "border-[4px] border-[#17275D] w-[1000px] h-[300px] rounded-[50%] z-0 absolute top-[250px] left-[-100px]"
          )}
        ></div>
        <img
          alt="img"
          src={backgroundHomepage}
          className="w-full max-w-[426px] h-full max-h-[400px] rounded-full z-10 absolute top-[100px] left-[50px] border-[4px] border-[#FF3030]"
        />
        <img
          alt="img"
          src={backgroundHomepage}
          className="w-full max-w-[250px] h-full max-h-[250px] rounded-full z-10 absolute top-[475px] left-[300px] border-[4px] border-[#E7CF1E]"
        />
        <img
          alt="img"
          src={backgroundHomepage}
          className="w-full max-w-[300px] h-full max-h-[300px] rounded-full z-10 absolute top-[225px] left-[500px] border-[4px] border-[#2ED72E]"
        />
      </div>
      <div className={cn(styles.corner_top_curved, "w-[85%] relative")}>
        <div className="absolute w-full right-[20%] top-[30vh] flex flex-col gap-10 h-full">
          <Typography className="text-[60px] font-extrabold">
            | VỀ CHÚNG TÔI
          </Typography>
          <Typography className="text-white">
            Từ ngày thành lập 2010 và phát triển đến nay, DPM đã vượt qua hàng
            ngàn thách thức, khắc phục mọi khó khăn để khẳng định mình là một
            trong những nhà sản xuất và lắp ghép các sản phẩm bê tông dự ứng lực
            đúc sẵn hàng đầu hiện nay. Chúng tôi không chỉ đo lường thành công
            bằng số lượng công trình hoàn thành, mà còn bằng khả năng tạo ra giá
            trị cho đối tác, khách hàng, và xã hội. Với phương châm “Phát triển
            cùng bạn, Thịnh vượng sẽ chia,” Chúng tôi cam kết kiến tạo những
            công trình đáp ứng mọi tiêu chuẩn đề ra của các chủ đầu tư, các tổng
            thầu về An Toàn, Chất lượng, Thẩm mỹ, Tiến độ và Giá thành. Chân
            thành cảm ơn sự tin tưởng và ủng hộ từ phía đối tác, khách hàng, và
            cộng đồng. Hãy cùng chúng tôi tiến bước vào những hành trình xây
            dựng tương lai thịnh vượng và bền vững.
          </Typography>
          <Typography className="text-white">
            Chủ tịch hội đồng quản trị.
          </Typography>
          <button className="text-white w-full max-w-[150px] rounded-2xl bg-[#354B99] border-white border p-2 cursor-pointer">
            XEM THÊM
          </button>
        </div>
      </div>
    </section>
  );
};

export default VeChungToiSection;
