import Image from "next/image";

import SearchBar from "../../components/Search";

import clubsStyles from "../../styles/Clubs.module.scss";

const Clubs = ({}) => {
  return (
    <div className={clubsStyles.container}>
      <div className={clubsStyles.heroContainer}>
        <div className={clubsStyles.backgroundImage}>
          <Image
            src="/assets/images/Rectangle.svg"
            alt="Splash"
            layout="fill"
            objectPosition="center"
          ></Image>
        </div>
        <div className={clubsStyles.heroTexts}>
          <h1 className={clubsStyles.title}>Câu lạc bộ</h1>
          <p className={clubsStyles.subtitle}>
            Tất tần tật về mọi câu lạc bộ trong trường giúp bạn tìm ra
            chốn mình thuộc về
          </p>
        </div>
      </div>
      <div className={clubsStyles.bodyContainer}>
        <div className={clubsStyles.search}>
          <SearchBar className={clubsStyles.searchBar} name="clubs" />
          <div className={clubsStyles.favourite}>0</div>
        </div>
        <div className={clubsStyles.clubsArea}>
          <div className={clubsStyles.clubsImage}>
            <Image
              src="/assets/images/Ellipse.svg"
              alt="Splash"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
