import Head from "next/Head";
import Image from "next/image";

import storystyles from "../../styles/Story.module.scss";
import arrow from "../../assets/Arrow 1.svg";

const index = () => {
    return (
      <div className={storystyles.story}>
        <Head>
          <title>Story</title>
        </Head>
        <div className={storystyles.name}>INFINITY</div>
        <div className={storystyles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
        <ul className={storystyles.button}>
          <li className={storystyles.buttonLeft}>Story</li>
          <li className={storystyles.buttonRight}>Character Dev</li>
        </ul>
        <Image className={storystyles.image} src={arrow} alt="Scroll Down" />
      </div>
    );
  };
  export default index;