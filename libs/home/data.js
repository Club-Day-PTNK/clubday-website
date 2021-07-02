import Image from "next/image";
import { clubsIconsList } from "../../libs/home/clubs";
import dummyRectangle from "../../public/images/Rectangle.svg";
import ClubsIcons from "../../components/home/Icons";

export const bodyContents = {
  info: {
    orientation: "left",
    texts: {
      title:
        "Tham dự sự kiện về các câu lạc bộ duy nhất và lớn nhất năm",
      lines: [
        "13h-15h, ngày 11/09/2021",
        "Sân trường Phổ Thông Năng Khiếu cơ sở 1",
        "153 Nguyễn Chí Thanh, phường 9, quận 5, TP.HCM",
      ],
      link: { cta: "Đăng ký ngay", dest: "/" },
    },
    components: <Image src={dummyRectangle} alt="Club Day Picture" />,
  },
  clubs: {
    orientation: "right",
    texts: {
      title: "Khai phá tiềm năng vô tận trong mỗi người",
      lines: [
        "Với 16 câu lạc bộ trải rộng mọi sở thích, đam mê, không ước mơ nào là không thể",
      ],
      link: { cta: "Khám phá ngay", dest: "/" },
    },
    components: <ClubsIcons clubsIconsList={clubsIconsList} />,
  },
  about: {
    orientation: "left",
    texts: {
      title: "Muốn biết thêm về chúng tớ?",
      lines: [
        "Những điều siêu thú vị về hành trình tạo nên Club Day của một trong những ban tổ chức đoàn kết và xịn xò nhất quả đất!",
      ],
      link: { cta: "Lắng nghe câu chuyện khởi nguồn", dest: "/" },
    },
    components: <Image src={dummyRectangle} alt="Club Day Picture" />,
  },
  quizz: {
    orientation: "center",
    texts: {
      title: "Băn khoăn giữa bao lựa chọn?",
      lines: [
        "Thử ngay trắc nghiệm tính cách nhanh và tìm ra chốn mình thuộc về!",
      ],
      link: { cta: "Chơi ngay", dest: "/" },
    },
    components: <Image src={dummyRectangle} alt="Club Day Picture" />,
  },
  register: {
    orientation: "left",
    texts: {
      title:
        "Và còn nhiều điều thú vị khác đang chờ đón các bạn trong sự kiện sắp tới!  ",
      lines: [],
      link: { cta: "Đăng ký ngay", dest: "/" },
    },
    components: <Image src={dummyRectangle} alt="Club Day Picture" />,
  },
};
