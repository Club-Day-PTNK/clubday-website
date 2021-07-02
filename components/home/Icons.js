import iconStyles from "../../styles/home/Icons.module.scss";

import Image from "next/image";

const ClubsIcons = ({ clubsIconsList }) => {
  let components = [];

  clubsIconsList.forEach((address, index) => {
    let component = (
      <div className={iconStyles.wrapper} key={index}>
        <Image
          src={address}
          alt="Clubs Icon"
          width={500}
          height={500}
          className={iconStyles.icon}
        ></Image>
      </div>
    );
    components.push(component);
  });
  return <div className={iconStyles.iconContainer}>{components}</div>;
};

export default ClubsIcons;
