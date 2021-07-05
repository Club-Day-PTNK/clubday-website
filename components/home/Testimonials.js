import testimonialStyles from "../../styles/home/Testimonials.module.scss";

const Testimonials = ({ props }) => {
  return (
    <div className={testimonialStyles.container}>
      <div className={testimonialStyles.wrapper}>{props.avatar}</div>
      <blockquote className={testimonialStyles.quote}>
        {props.quote}
      </blockquote>
      <div className={testimonialStyles.nameBlock}>
        {props.prefix}{" "}
        <span className={testimonialStyles.name}>{props.name}</span>
      </div>
      <div className={testimonialStyles.position}>
        {props.position}
      </div>
    </div>
  );
};

export default Testimonials;
