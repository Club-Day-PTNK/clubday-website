import Head from "next/head";
import Image from "next/image";
import characterStyles from "../../../styles/Character.module.scss";
import Slide from "../../../components/character/Slide";
// import rectangle from "../../../public/assets/im"

const character = () => {
  return (
    <div>
      <Head>
        <title>Character</title>
      </Head>
      <div>
        <Slide />
      </div>
    </div>
  );
};
export default character;
