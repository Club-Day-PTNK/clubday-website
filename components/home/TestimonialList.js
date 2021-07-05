import Testimonials from "./Testimonials";

import listStyles from "../../styles/home/TestimonialList.module.scss";

import { useTransition, animated } from "react-spring";

import { useState, useEffect } from "react";

const TestimonialList = ({ listOfTestimonials }) => {
  const components = listOfTestimonials.map((testimonial, index) => (
    <Testimonials props={testimonial} key={index} />
  ));
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
    loop: { reverse: true },
  });

  useEffect(() => {
    const t = setInterval(
      () => set((state) => (state + 1) % components.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={listStyles.container}>
      {transitions((style, i) => (
        <animated.div
          style={{
            ...style,
          }}
        >
          {components[i]}
        </animated.div>
      ))}
    </div>
  );
};

export default TestimonialList;
