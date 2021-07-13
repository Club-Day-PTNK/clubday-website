import Image from "next/image";
import creditStyles from "../../styles/Credit.module.scss";
import Face from "../../components/credit/Face.js";
import Head from "next/head";

const credit = () => {
  return (
    <div className={creditStyles.container}>
      <Head>
        <title>Credit</title>
      </Head>
      <div className={creditStyles.textContainer}>
        <div className={creditStyles.header}>
          <h1 className={creditStyles.title}>CREDIT</h1>
          <h2 className={creditStyles.text1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <h2 className={creditStyles.text2}>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <div className={creditStyles.faceContainer}>
        <Face />
      </div>
      <div className={creditStyles.bottomContainer}>
        <div className={creditStyles.bottomText1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing!
        </div>
        <div className={creditStyles.bottomText2}>
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  );
};
export default credit;
