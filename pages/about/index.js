import Year from "../../components/about/Year";
import aboutStyles from "../../styles/About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={aboutStyles.container}>
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
          <h3>
            Những câu chuyện về một đội ngũ Ban Tổ chức xịn xò nhất quả đất
          </h3>
        </div>
      </div>
      <div className={aboutStyles.body}>
        <div className={aboutStyles.aboutContainer}>
          <h2 className={aboutStyles.subtitle}>Lịch sử hình thành</h2>
          <p className={aboutStyles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit
            dignissim sapien urna consectetur amet, ipsum porttitor porta nibh.
            Amet dui at etiam convallis. Nunc congue sit egestas ac cursus nunc
            ac euismod enim. Ut bibendum arcu, amet, donec malesuada odio
            faucibus. At gravida diam vivamus amet. Sit aenean massa vel velit
            velit adipiscing. Vitae, posuere cras nam duis nulla est. Vel
            feugiat nisl amet et. Sed netus vel lorem cras nulla vestibulum
            risus justo, vitae. Eget nibh dolor malesuada risus scelerisque
            mauris purus pharetra.
          </p>
          <Year>2018</Year>
          <Year>2019</Year>
          <Year>2020</Year>
          <Year>2021</Year>
        </div>
      </div>
    </div>
  );
};

export default About;
