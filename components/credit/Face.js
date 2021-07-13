import Image from "next/image";
import faceStyles from "../../styles/Face.module.scss";
import circle from "../../public/assets/images/Ellipse.svg";
const Face = () => {
  return (
    <div className={faceStyles.faceContainer}>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}></div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className={faceStyles.image}>
        <Image src={circle} alt="Club Day Person" />
        <div className={faceStyles.title}>Lorem Ispum</div>
        <div className={faceStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};
export default Face;
