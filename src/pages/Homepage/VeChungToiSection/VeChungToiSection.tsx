import { cn } from "@/utils/twClassname";
import styles from "./VeChungToiSection.module.scss";
import { Typography } from "antd";

const VeChungToiSection = () => {
  return (
    <section className="h-full w-full bg-[#fff] p-10 flex">
      <div className="w-[15%] bg-inherit"></div>
      <div className={cn(styles.corner_top_curved, "w-[85%] relative")}>
        {/* Note: do style hình thang đụng tới cái border và nó ăn hết diện tích của cái div nên cái top absolute này sẽ hơi lớn... */}
        <div className="absolute w-full right-[20%] top-[calc(100%+800%)] flex flex-col gap-10 h-full">
          <Typography className="text-[60px] font-extrabold">| VỀ CHÚNG TÔI</Typography>
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
