import Testimonials from "./Testimonials";

const TestimonialList = ({ listOfTestimonials }) => {
  const components = listOfTestimonials.map((testimonial) => {
    <Testimonials>{testimonial}</Testimonials>;
  });
  return <div>{components}</div>;
};

export default TestimonialList;
