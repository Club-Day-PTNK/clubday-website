import years2020Styles from "../../styles/about/Years-2020.module.scss";
import Hero from "../../components/about/Hero";
import aboutStyles from "../../styles/About.module.scss";
import Image from "next/image";
import { memberContents } from "../../libs/about/members2020";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Team from "../../components/about/Team";
import Member from "../../components/about/Member";

import { useState } from "react";

var Deque = require("collections/deque");

const listOfTeams = [];
Object.keys(memberContents).forEach((key) => {
  let index = Object.keys(memberContents).indexOf(key);
  listOfTeams.push({
    id: index,
    key: key,
    content: memberContents[key],
  });
});
let len = listOfTeams.length;
let spanIndex = Math.floor(len / 2);
let deque = new Deque(listOfTeams);
while (deque.peekBack().id != 2) {
  deque.unshift(deque.pop());
}

const year2020 = () => {
  const [selected, setSelected] = useState(0);

  const tabClick = (id) => {
    while (deque.peekBack().id != id) {
      deque.unshift(deque.pop());
    }
    while (deque.peek().id != (id - spanIndex + 5) % 5) {
      deque.push(deque.shift());
    }
    setSelected(id);
  };
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
            {deque.toArray().map((element) => (
              <div
                className={years2020Styles.team}
                key={element.id}
                onClick={(_) => {
                  tabClick(element.id);
                }}
              >
                <Team
                  teamName={element.key}
                  selected={element.id == selected}
                />
              </div>
            ))}
            <div className={years2020Styles.teamBodyContainer}>
              {Object.keys(deque.toArray()[selected].content).map(
                (name) => (
                  <Member
                    name={name}
                    classYear={
                      deque.toArray()[selected].content[name]
                        .classYear
                    }
                    avatar={
                      deque.toArray()[selected].content[name].icon
                    }
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default year2020;
