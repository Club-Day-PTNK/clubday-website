import Link from "next/link";

import cardStyles from "../../styles/cards/Home.module.scss";

import classNames from "classnames/bind";
let cx = classNames.bind(cardStyles);

const BodyCard = (props) => {
  const { orientation, texts, components } = props.children;
  const cardClass = cx(props.className, {
    left: orientation === "left",
    right: orientation === "right",
    center: orientation === "center",
  });
  const paragraphs = texts.lines.map((line, index) => (
    <p key={index}>{line}</p>
  ));
  return (
    <div className={cardClass}>
      <div className={cardStyles.texts}>
        <h3 className={cardStyles.title}>{texts.title}</h3>
        <div className={cardStyles.paragraphs}>{paragraphs}</div>
        <Link href={texts.link.dest}>
          <a className={cardStyles.cta}>{texts.link.cta}</a>
        </Link>
      </div>
      <div className={cardStyles.components}>{components}</div>
    </div>
  );
};

export default BodyCard;
