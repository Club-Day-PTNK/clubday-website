import years2018Styles from "../../styles/about/Years-2018.module.scss";
import Hero from "../../components/about/Hero";
import aboutStyles from "../../styles/About.module.scss";
import Image from "next/image";
import Member from "../../components/about/Member";
import { memberContents } from "../../libs/about/members";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const year2018 = () => {
  return (
    <div className={years2018Styles.container}>
      <div className={aboutStyles.container}>
        <Hero />
      </div>
      <div className={years2018Styles.body}>
        <div className={years2018Styles.yearsContainer}>
          <FontAwesomeIcon
            icon={faTimes}
            className={years2018Styles.icon}
            onClick={() => {}}
          />
          <div className={years2018Styles.imageWrapper}>
            <Image
              src="/assets/images/Ellipse.svg"
              alt="theme"
              layout="fill"
              objectPosition="center"
            />
          </div>
          <h1 className={years2018Styles.title}>CLUB DAY 2018</h1>
          <h3 className={years2018Styles.subtitle}>Bamboo</h3>
          <p className={years2018Styles.para}>
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
          <div className={years2018Styles.memberContainer}>
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

export default year2018;
