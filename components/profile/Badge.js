import Image from "next/image";
import badgeStyles from "../../styles/profile/Badge.module.scss";


const Badge = () => {
  return (
    <div className={badgeStyles.container}>
      <div className={badgeStyles.imageWrapper}>
        <Image
          src="/assets/images/Ellipse.svg"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className={badgeStyles.text}>
          <h3>Tên Badge</h3>
          <h4>Description</h4>
      </div>
    </div>
  );
};

export default Badge;
