import Image from "next/image";
import testimonialStyles from "../../styles/home/Testimonials.module.scss";

const Testimonials = ({}) => {
  return (
    <div className={testimonialStyles.container}>
      <div className={testimonialStyles.wrapper}>
        <Image
          src="/assets/images/Ellipse.svg"
          alt="Avatars"
          width={500}
          height={500}
        ></Image>
      </div>
      <blockquote className={testimonialStyles.quote}>
        “Club Day là trải nghiệm không thể tuyệt vời hơn!”
      </blockquote>
      <div className={testimonialStyles.nameBlock}>
        Chị <span className={testimonialStyles.name}>Lê Minh Tú</span>
      </div>
      <div className={testimonialStyles.position}>
        Trưởng BTC Club Day 2018
      </div>
    </div>
  );
};

export default Testimonials;
