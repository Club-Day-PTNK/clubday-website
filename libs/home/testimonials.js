import Image from "next/image";

import ellipse from "../../public/assets/images/Ellipse.svg";

export const testimonials = [
  {
    avatar: (
      <Image
        src={ellipse}
        width={500}
        height={500}
        alt="avatars"
      ></Image>
    ),
    quote: "“Club Day là trải nghiệm không thể tuyệt vời hơn!”",
    prefix: "Chị",
    name: "Minh Tú",
    position: "Trưởng Ban Tổ chức Club Day 2018",
  },
  {
    avatar: (
      <Image
        src={ellipse}
        width={500}
        height={500}
        alt="avatars"
      ></Image>
    ),
    quote: "“Thật khó quên!”",
    prefix: "Anh",
    name: "Tiến Đức",
    position: "Thành viên Ban Tổ chức Club Day 2019",
  },
  {
    avatar: (
      <Image
        src={ellipse}
        width={500}
        height={500}
        alt="avatars"
      ></Image>
    ),
    quote: "“Nhiều niềm vui”",
    prefix: "Chị",
    name: "Quỳnh Như",
    position: "Trưởng Ban Tổ chức Club Day 2020",
  },
];
