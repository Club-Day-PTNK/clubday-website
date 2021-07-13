import Gallery from "./Gallery";
import slideStyles from "../../styles/Gallery/Slide.module.scss";
const Slide = () => {
  return (
    <div className={slideStyles.container}>
      <div className={slideStyles.gallery}>
        <Gallery />
      </div>
      <div className={slideStyles.text}>
        Elementum sodales turpis nibh nulla donec. Aliquam integer vulputate sed
        faucibus tincidunt. Facilisis suspendisse quam sit ullamcorper orci
        amet. Pellentesque sed sit sit turpis sollicitudin amet. Orci, elementum
        felis elementum facilisis nec volutpat lobortis. Cras ut viverra non
        scelerisque consectetur.
      </div>
    </div>
  );
};

export default Slide;
