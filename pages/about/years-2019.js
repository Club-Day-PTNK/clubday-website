import years2019Styles from "../../styles/about/Years-2018.module.scss";
import Hero from "../../components/about/Hero";
import aboutStyles from "../../styles/About.module.scss";
import Image from "next/image";
import Member from "../../components/about/Member";
import { memberContents } from "../../libs/about/members2019";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const year2019 = () => {
  return (
    <div className={years2019Styles.container}>
      <div className={aboutStyles.container}>
        <Hero />
      </div>
      <div className={years2019Styles.body}>
        <div className={years2019Styles.yearsContainer}>
          <FontAwesomeIcon
            icon={faTimes}
            className={years2019Styles.icon}
            onClick={() => {}}
          />
          <div className={years2019Styles.imageWrapper}>
            <Image
              src="/assets/images/Ellipse.svg"
              alt="theme"
              layout="fill"
              objectPosition="center"
            />
          </div>
          <h1 className={years2019Styles.title}>CLUB DAY 2019</h1>
          <h3 className={years2019Styles.subtitle}>Lava</h3>
          <p className={years2019Styles.para}>
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
          <div className={years2019Styles.memberContainer}>
            {Object.keys(memberContents).map((name) => (
              <Member
                name={name}
                classYear={memberContents[name].classYear}
                avatar={memberContents[name].avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default year2019;
