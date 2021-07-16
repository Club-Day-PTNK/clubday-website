import Head from "next/head";
import Image from "next/image";


import profileStyles from "../../styles/Profile.module.scss";
import Badge from "../../components/profile/Badge";
import arrow from "../../public/assets/images/Arrow 1.svg";
import Interest from "../../components/profile/Interest"

const index = () => {
  return (
    <div className={profileStyles.container}>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={profileStyles.card}>
        <h1>
          Chào mừng, <span>P</span>
        </h1>
        <div className={profileStyles.quizzResult}>
          <h2>Kết quả bài quizz của bạn:</h2>
          <div className={profileStyles.imageWrapper}>
            <Image src="/assets/images/Ellipse.svg" width={100} height={100}>

            </Image>
          </div>
          <div className={profileStyles.clubInfo}>
            <h3>Tên club:</h3>
            <h3>Link:</h3>
          </div>
        </div>
      </div>
      <div className={profileStyles.card}>
        <h2>Badges</h2>
        <div className={profileStyles.carousel}>
          <Badge/>
          <Badge/>
          <Badge/>
          <Badge/>
          <Badge/>
        </div>
      </div>
      {/* <div>

      </div> */}
      <div className={profileStyles.card}>
        <h2>Các câu lạc bộ quan tâm</h2>
        <div className={profileStyles.carousel}>
            <Interest/>
            <Interest/>
            <Interest/>
            <Interest/>
            <Interest/>
        </div>
      </div>
    </div>
  );
};
export default index;
