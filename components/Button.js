import Link from "next/link";

import buttonStyles from "../styles/Button.module.scss";

import classNames from "classnames/bind";

let cx = classNames.bind(buttonStyles);

const Button = ({
  type,
  onClick = () => {},
  content,
  href,
  important = false,
}) => {
  const buttonClass = cx({ container: true, important: important });
  return type == "link" ? (
    <div className={buttonClass}>
      <Link href={href}>
        <a className={buttonStyles.link}>{content}</a>
      </Link>
    </div>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
