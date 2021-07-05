import Head from "next/Head";
import Image from "next/image";

import storystyles from "../../styles/Story.module.scss";
import arrow1 from "../../public/assets/images/Arrow 1.svg";
import rectangle from "../../public/assets/images/Rectangle.svg";
import arrow2 from "../../public/assets/images/Arrow 3.svg";

const index = () => {
  return (
    <div className={storystyles.story}>
      <Head>
        <title>Story</title>
      </Head>
      <ul className={storystyles.itemContainer1}>
        <li>
          <div className={storystyles.name}>INFINITY</div>
          <div className={storystyles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </div>
          <ul className={storystyles.button}>
            <li className={storystyles.buttonLeft}>Story</li>
            <li className={storystyles.buttonRight}>Character Dev</li>
          </ul>
          <div className={storystyles.arrow1}>
            <Image src={arrow1} alt="Scroll Down" />
          </div>
        </li>
        <li>
          <ul className={storystyles.itemContainer2}>
            <li className={storystyles.item}>
              <div className={storystyles.arrow2}>
                <Image src={arrow2} alt="Club Picture" />
              </div>
            </li>
            <li className={storystyles.title}>
              <h1>Tilte</h1>
              <h2>Lorem ipsum dolor sit amet</h2>
            </li>
            <li className={storystyles.item}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                eu, senectus placerat lectus nulla pellentesque consequat tortor
                purus. Leo amet purus posuere adipiscing condimentum vulputate
                sit velit. Gravida congue eget vel vitae, sagittis pharetra
                massa tristique. Lacus felis vivamus eget volutpat nunc.
                Facilisis rhoncus pretium feugiat at pulvinar rhoncus consequat.
                At augue maecenas at erat nisl at dictum. Cras quis laoreet odio
                magna vitae arcu rhoncus sed. Nullam sapien ut augue enim
                mattis. Facilisis dictumst facilisi augue at pretium id
                volutpat. Lorem nisi mi, cursus placerat ullamcorper et neque.
                Quis sit non imperdiet eu purus cras ac vel. Vestibulum, amet,
                ac praesent pellentesque viverra sed interdum purus. Aliquam,
                nisl convallis ut turpis. Eros, sit bibendum fringilla nisl.
                Morbi sit aenean eget diam, sit aenean adipiscing venenatis
                potenti. Urna, eleifend proin fringilla elit sed. Integer in
                ultricies et ut elementum ligula. Consequat nec tincidunt
                maecenas neque. Cursus cras nunc consectetur in ultricies
                pretium, cursus. Era Sed netus sagittis sagittis dui. Suscipit
                placerat mi lectus turpis morbi lorem. Lectus libero, non
                feugiat
              </div>
            </li>
            <li className={storystyles.item}>
              <div className={storystyles.image}>
                <Image src={rectangle} alt="Club Picture" />
              </div>
            </li>
            <li className={storystyles.item}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                eu, senectus placerat lectus nulla pellentesque consequat tortor
                purus. Leo amet purus posuere adipiscing condimentum vulputate
                sit velit. Gravida congue eget vel vitae, sagittis pharetra
                massa tristique. Lacus felis vivamus eget volutpat nunc.
                Facilisis rhoncus pretium feugiat at pulvinar rhoncus consequat.
                At augue maecenas at erat nisl at dictum. Cras quis laoreet odio
                magna vitae arcu rhoncus sed. Nullam sapien ut augue enim
                mattis. Facilisis dictumst facilisi augue at pretium id
                volutpat. Lorem nisi mi, cursus placerat ullamcorper et neque.
                Quis sit non imperdiet eu purus cras ac vel. Vestibulum, amet,
                ac praesent pellentesque viverra sed interdum purus. Aliquam,
                nisl convallis ut turpis. Eros, sit bibendum fringilla nisl.
                Morbi sit aenean eget diam, sit aenean adipiscing venenatis
                potenti. Urna, eleifend proin fringilla elit sed. Integer in
                ultricies et ut elementum ligula. Consequat nec tincidunt
                maecenas neque.
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default index;