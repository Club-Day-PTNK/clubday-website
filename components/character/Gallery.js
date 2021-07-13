import Image from "next/image";
import galleryStyles from "../../styles/Gallery/Gallery.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(galleryStyles);

const Gallery = () => {
  return (
    <div className={galleryStyles.gallery}>
      <div className={cx({ imageContainer: true, first: true })}>
        <Image
          src="/assets/images/Rectangle.svg"
          layout="fill"
          className={galleryStyles.image}
        ></Image>
      </div>
      <div className={galleryStyles.imageContainer}>
        <Image src="/assets/images/Rectangle.svg" layout="fill"></Image>
      </div>
      <div className={galleryStyles.imageContainer}>
        <Image
          src="/assets/images/Rectangle.svg"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className={galleryStyles.imageContainer}>
        <Image
          src="/assets/images/Rectangle.svg"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className={galleryStyles.imageContainer}>
        <Image
          src="/assets/images/Rectangle.svg"
          width={600}
          height={600}
        ></Image>
      </div>
      <div className={galleryStyles.imageContainer}>
        <Image
          src="/assets/images/Rectangle.svg"
          width={600}
          height={600}
        ></Image>
      </div>
    </div>
  );
};
export default Gallery;
