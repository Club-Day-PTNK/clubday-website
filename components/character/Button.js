import Link from "next/link";

import buttonStyles from "../../styles/Gallery/Button.module.scss";

import classNames from "classnames/bind";

let cx = classNames.bind(buttonStyles);

const Button = ({
  type,
  onClick = () => {},
  content,
  icon = "",
  href,
  important = false,
}) => {
  const buttonClass = cx({ container: true, important: important });
  return type == "link" ? (
    <div className={buttonClass}>
      <Link href={href}>
        <a className={buttonStyles.link}>
          {icon}
          {content}
        </a>
      </Link>
    </div>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      {icon}
      {content}
    </button>
  );
};

export default Button;
