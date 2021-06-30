import React, { useEffect, useState } from "react";

import timerStyles from "../styles/Timer.module.scss";

const Timer = ({}) => {
  const calculateTimeLeft = () => {
    let eventTime = new Date("Sep 11, 2021 12:00:00").getTime();
    let now = new Date().getTime();
    let distance = eventTime - now;
    const { days, hours, mins, seconds } = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
    return { days, hours, mins, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const { days, hours, mins, seconds } = timeLeft;

  return (
    <div
      suppressHydrationWarning={true}
      className={timerStyles.container}
    >
      <span className="day" suppressHydrationWarning>
        {days}
      </span>{" "}
      ngày{" "}
      <span className="hour" suppressHydrationWarning>
        {hours}
      </span>{" "}
      giờ{" "}
      <span className="minute" suppressHydrationWarning>
        {mins}
      </span>{" "}
      phút{" "}
      <span className="second" suppressHydrationWarning>
        {seconds}
      </span>{" "}
      giây
    </div>
  );
};

export default Timer;
