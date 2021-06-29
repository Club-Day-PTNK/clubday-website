import Link from "next/link";
import Logo from "./Logo";

import footerStyles from "../styles/Footer.module.scss";

const Footer = ({}) => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.upper}>
        <Logo />
        <Link href="/">
          <a className={footerStyles.mobile}>Mobile app</a>
        </Link>
      </div>
      <div className={footerStyles.divisor}></div>
      <div className={footerStyles.lower}>
        <span></span>
        <div className={footerStyles.tagline}>
          © Club Day. 2021. Thương thương!
        </div>
        <div className={footerStyles.socialMediaContainer}>
          <div>Theo dõi chúng tớ tại:</div>
          <div className={footerStyles.socialMedias}>
            <div className={footerStyles.socialMediaButtons}></div>
            <div className={footerStyles.socialMediaButtons}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
