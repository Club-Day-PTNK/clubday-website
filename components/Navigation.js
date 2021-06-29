import Link from "next/link";
import navStyles from "../styles/Navigation.module.scss";
import Logo from "./Logo";

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
              <Link href="#">
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
          <ul className={navStyles.buttonList}>
            <li className={navStyles.button}>
              <Link href="#">
                <a>Login</a>
              </Link>
            </li>
            <li className={navStyles.button}>
              <Link href="#">
                <a className={navStyles.registerCTA}>Register</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
