import Head from "next/head";
import Image from "next/image";
import Button from "../../components/Button";
import storyStyles from "../../styles/Story.module.scss";
import arrow1 from "../../public/assets/images/Arrow 1.svg";
import arrow2 from "../../public/assets/images/Arrow 3.svg";
import rectangle from "../../public/assets/images/Rectangle.svg";
import background from "../../public/assets/images/Group 8.svg";
import rectangle90 from "../../public/assets/images/rectangle90.svg";

const Story = () => {
  return (
    <div>
      <Head>
        <title>Story</title>
      </Head>
      <div className={storyStyles.containerTop}>
        <div className={storyStyles.title}>INFINITY</div>
        <div className={storyStyles.descriptTop}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
        <div className={storyStyles.buttonContainer}>
          <Button
            type="link"
            href="#"
            content="Story"
            important={true}
            className={storyStyles.button}
          ></Button>
          <Button
            type="link"
            href="#"
            content="Character Dev"
            important={true}
            className={storyStyles.button}
          ></Button>
        </div>
        <Image src={arrow1} alt="Scroll Down" className={storyStyles.arrow1} />
      </div>
      <div className={storyStyles.containerMiddle}>
        <Image src={arrow2} alt="Scroll Down" className={storyStyles.arrow1} />
        <div className={storyStyles.titleMiddle}>Title</div>
        <div className={storyStyles.descriptMiddle}>
          Lorem ipsum dolor sit amet
        </div>
        <div className={storyStyles.textMiddle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu,
          senectus placerat lectus nulla pellentesque consequat tortor purus.
          Leo amet purus posuere adipiscing condimentum vulputate sit velit.
          Gravida congue eget vel vitae, sagittis pharetra massa tristique.
          Lacus felis vivamus eget volutpat nunc. Facilisis rhoncus pretium
          feugiat at pulvinar rhoncus consequat. At augue maecenas at erat nisl
          at dictum. Cras quis laoreet odio magna vitae arcu rhoncus sed. Nullam
          sapien ut augue enim mattis. Facilisis dictumst facilisi augue at
          pretium id volutpat. Lorem nisi mi, cursus placerat ullamcorper et
          neque. Quis sit non imperdiet eu purus cras ac vel. Vestibulum, amet,
          ac praesent pellentesque viverra sed interdum purus. Aliquam, nisl
          convallis ut turpis. Eros, sit bibendum fringilla nisl. Morbi sit
          aenean eget diam, sit aenean adipiscing venenatis potenti. Urna,
          eleifend proin fringilla elit sed. Integer in ultricies et ut
          elementum ligula. Consequat nec tincidunt maecenas neque. Cursus cras
          nunc consectetur in ultricies pretium, cursus. Era Sed netus sagittis
          sagittis dui. Suscipit placerat mi lectus turpis morbi lorem. Lectus
          libero, non feugiat
        </div>
        <div className={storyStyles.picture}>
          <Image src={rectangle} alt="Club Day Picture"></Image>
        </div>
        <div className={storyStyles.textMiddle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eu,
          senectus placerat lectus nulla pellentesque consequat tortor purus.
          Leo amet purus posuere adipiscing condimentum vulputate sit velit.
          Gravida congue eget vel vitae, sagittis pharetra massa tristique.
          Lacus felis vivamus eget volutpat nunc. Facilisis rhoncus pretium
          feugiat at pulvinar rhoncus consequat. At augue maecenas at erat nisl
          at dictum. Cras quis laoreet odio magna vitae arcu rhoncus sed. Nullam
          sapien ut augue enim mattis. Facilisis dictumst facilisi augue at
          pretium id volutpat. Lorem nisi mi, cursus placerat ullamcorper et
          neque. Quis sit non imperdiet eu purus cras ac vel. Vestibulum, amet,
          ac praesent pellentesque viverra sed interdum purus. Aliquam, nisl
          convallis ut turpis. Eros, sit bibendum fringilla nisl. Morbi sit
          aenean eget diam, sit aenean adipiscing venenatis potenti. Urna,
          eleifend proin fringilla elit sed. Integer in ultricies et ut
          elementum ligula. Consequat nec tincidunt maecenas neque.
        </div>
        <div className={storyStyles.background}>
          <Image src={background} alt="Club Day Picture" />
        </div>
      </div>
      <div className={storyStyles.containerBottom}>
        <div className={storyStyles.picture90}>
          <Image src={rectangle90} alt="Club Day Picture" />
        </div>
        <div className={storyStyles.outline}>
          <div className={storyStyles.textBottom}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            eros, lorem diam pretium vestibulum, elementum.
          </div>
          <div className={storyStyles.buttonContainer}>
            <Button
              type="link"
              href="#"
              content="Khám phá ngay"
              important={true}
              className={storyStyles.button}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Story;
