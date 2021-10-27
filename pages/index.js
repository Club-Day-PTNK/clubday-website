import BodyCard from "@components/cards/Home";
import Timer from "@components/Timer";
import { bodyContents } from "@libs/home/data";

import bodyCardStyles from "@styles/cards/Home.module.scss";
import homeStyles from "@styles/Home.module.scss";

import classNames from "classnames/bind";
let cx = classNames.bind(bodyCardStyles);

export default function Home({}) {
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
