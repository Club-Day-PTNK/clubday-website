import Image from "next/image";
import dummy from "../assets/Rectangle.svg";

import BodyCard from "../components/cards/Home";
import Timer from "../components/Timer";

import bodyCardStyles from "../styles/cards/Home.module.scss";
import homeStyles from "../styles/Home.module.scss";

import classNames from "classnames/bind";
let cx = classNames.bind(bodyCardStyles);

const bodyContents = {
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
    components: (
      <Image
        src={dummy}
        alt="Club Day Picture"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
    ),
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
    components: (
      <Image
        src={dummy}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
    ),
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
    components: (
      <Image
        src={dummy}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
    ),
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
    components: (
      <Image
        src={dummy}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
    ),
  },
  register: {
    orientation: "left",
    texts: {
      title:
        "Và còn nhiều điều thú vị khác đang chờ đón các bạn trong sự kiện sắp tới!  ",
      lines: [],
      link: { cta: "Đăng ký ngay", dest: "/" },
    },
    components: (
      <Image
        src={dummy}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // Optionally allows to add a blurred version of the image while loading
        // placeholder="blur"
      />
    ),
  },
};

export default function Home() {
  const cardsList = [];

  Object.keys(bodyContents).forEach((content, index) => {
    cardsList.push(
      <BodyCard
        key={index}
        className={cx({
          cards: true,
          concurrent: index % 2 == 1,
        })}
      >
        {bodyContents[content]}
      </BodyCard>
    );
  });

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.heroContainer}>
        <div className={homeStyles.title}>
          Club Day <span>2021</span>
        </div>
        <Timer suppressHydrationWarning={true} />
      </div>
      <div className={homeStyles.bodyContainer}>{cardsList}</div>
    </div>
  );
}
