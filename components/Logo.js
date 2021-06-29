import Link from "next/link";
import logoStyles from "../styles/Logo.module.scss";

const Logo = ({}) => {
  return (
    <Link href="/">
      <a className={logoStyles.logo}>Club Day</a>
    </Link>
  );
};

export default Logo;
