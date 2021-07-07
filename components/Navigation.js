import Link from "next/link";
import navStyles from "../styles/Navigation.module.scss";
import Logo from "./Logo";

import Button from "./Button";

const Navigation = ({}) => {
  // * Organizing the Navbar as the Following JSX
  // * Using nested class in Sass but Ordinary Referencing in JSX

  return (
    <div className={navStyles.navbar}>
      <div className={navStyles.container}>
        <Logo />
        <nav className={navStyles.nav}>
          <ul className={navStyles.primaryNav}>
            <li>
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/clubs">
                <a>Clubs</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Quizz</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Themes</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Button
                type="link"
                href="#"
                content="Đăng nhập"
              ></Button>
            </li>
            <li>
              <Button
                type="link"
                href="#"
                content="Đăng ký"
                important={true}
              ></Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
