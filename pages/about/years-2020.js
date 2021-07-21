import years2020Styles from "../../styles/about/Years-2020.module.scss";
import Hero from "../../components/about/Hero";
import aboutStyles from "../../styles/About.module.scss";
import Image from "next/image";
import { memberContents } from "../../libs/about/members2020";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Team from "../../components/about/Team";

import { useState } from "react";

const year2020 = () => {
  const [selected, setSelected] = useState(3);
  return (
    <div className={years2020Styles.container}>
      <div className={aboutStyles.container}>
        <Hero />
      </div>
      <div className={years2020Styles.body}>
        <div className={years2020Styles.yearsContainer}>
          <FontAwesomeIcon
            icon={faTimes}
            className={years2020Styles.icon}
            onClick={() => {}}
          />
          <div className={years2020Styles.imageWrapper}>
            <Image
              src="/assets/images/Ellipse.svg"
              alt="theme"
              layout="fill"
              objectPosition="center"
            />
          </div>
          <h1 className={years2020Styles.title}>CLUB DAY 2020</h1>
          <h3 className={years2020Styles.subtitle}>Blue</h3>
          <p className={years2020Styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Hendrerit dignissim sapien urna consectetur amet, ipsum
            porttitor porta nibh. Amet dui at etiam convallis. Nunc
            congue sit egestas ac cursus nunc ac euismod enim. Ut
            bibendum arcu, amet, donec malesuada odio faucibus. At
            gravida diam vivamus amet. Sit aenean massa vel velit
            velit adipiscing. Vitae, posuere cras nam duis nulla est.
            Vel feugiat nisl amet et. Sed netus vel lorem cras nulla
            vestibulum risus justo, vitae. Eget nibh dolor malesuada
            risus scelerisque mauris purus pharetra.
          </p>
          <div className={years2020Styles.memberContainer}>
            {Object.keys(memberContents).map((teamName) => (
              <div
                className={years2020Styles.team}
                key={Object.keys(memberContents).indexOf(teamName)}
              >
                <Team
                  teamName={teamName}
                  teamMembers={memberContents[teamName]}
                  selected={
                    Object.keys(memberContents).indexOf(teamName) ==
                    selected
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default year2020;
