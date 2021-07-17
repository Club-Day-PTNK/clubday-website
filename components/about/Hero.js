import aboutStyles from "../../styles/About.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={aboutStyles.hero}>
      <div className={aboutStyles.imageWrapper}>
        <Image
          src="/assets/images/Rectangle.svg"
          layout="fill"
          alt="splash"
          objectPosition="center"
        />
      </div>
      <div className={aboutStyles.titleContainer}>
        <h1 className={aboutStyles.title}>VỀ CHÚNG MÌNH</h1>
        <h3>Những câu chuyện về một đội ngũ Ban Tổ chức xịn xò nhất quả đất</h3>
      </div>
    </div>
  );
};

export default Hero;
