import Switch from "./Switch";

import Image from "next/image";

import switchStyle from "../../styles/home/QuizzSwitch.module.scss";

import { useState, useEffect } from "react";

import { clubsIconsList } from "../../libs/home/quizzes";

import { useTransition, animated } from "react-spring";

const slides = [
  "photo-1544511916-0148ccdeb877",
  "photo-1544572571-ab94fd872ce4",
  "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG",
  "photo-1540206395-68808572332f",
];

const left = clubsIconsList.slice(clubsIconsList.length / 2);
const right = clubsIconsList.slice(
  clubsIconsList.length / 2,
  clubsIconsList.length
);

const emptyObject = {
  toggle: 0,
  leftIndex: 0,
  rightIndex: 0,
};

const QuizzSwitch = ({}) => {
  const [clubs, setClubs] = useState(emptyObject);

  useEffect(() => {
    const t = setInterval(
      () =>
        setClubs((state) => ({
          toggle: (state.toggle + 1) % 2,
          leftIndex: state.toggle
            ? (state.leftIndex + 1) % left.length
            : state.leftIndex,
          rightIndex: !state.toggle
            ? (state.rightIndex + 1) % left.length
            : state.rightIndex,
        })),
      4000
    );
    return () => clearTimeout(t);
  }, []);

  const leftTransitions = useTransition(clubs.leftIndex, {
    key: clubs.leftIndex,
    from: {
      opacity: 0,
      rotateY: -180,
      position: "absolute",
      zIndex: 999,
    },
    enter: { opacity: 1, rotateY: 0 },
    leave: { opacity: 0, rotateY: 180 },
    config: { duration: 1000 },
    loop: { reverse: true },
  });

  const rightTransitions = useTransition(clubs.rightIndex, {
    key: clubs.rightIndex,
    from: {
      opacity: 0,
      rotateY: 180,
      position: "absolute",
      zIndex: 999,
    },
    enter: { opacity: 1, rotateY: 0 },
    leave: { opacity: 0, rotateY: -180 },
    config: { duration: 1000 },
    loop: { reverse: true },
  });

  return (
    <div className={switchStyle.container}>
      <div className={switchStyle.imageWrapper}>
        {leftTransitions((style, i) => (
          <animated.div
            className={switchStyle.image}
            style={{
              ...style,
              backgroundImage: `url(${clubsIconsList[i]})`,
            }}
          ></animated.div>
        ))}
      </div>
      <Switch id="quizz" checked={clubs.toggle}></Switch>
      <div className={switchStyle.imageWrapper}>
        {rightTransitions((style, i) => (
          <animated.div
            className={switchStyle.image}
            style={{
              ...style,
              backgroundImage: `url(${clubsIconsList[i]})`,
            }}
          ></animated.div>
        ))}
      </div>
    </div>
  );
};

export default QuizzSwitch;
