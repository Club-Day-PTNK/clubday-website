import Image from "next/image";
import badgeStyles from "../../styles/profile/Badge.module.scss";


const Interest = () => {
    return (
      <div className={badgeStyles.container}>
        <div className={badgeStyles.imageWrapper}>
          <Image
            src="/assets/images/Ellipse.svg"
            width={80}
            height={80}
          ></Image>
      </div>
      </div>
    );
  };
  
  export default Interest;