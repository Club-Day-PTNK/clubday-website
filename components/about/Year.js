import React from "react";
import yearStyles from "../../styles/about/Year.module.scss";
import Image from "next/image";

const Year = ({ year,title,subtitle,icon }) => {
  return (
    <div className={yearStyles.container}>
      <div className={yearStyles.circle}>{year}</div>
      <div className={yearStyles.line}></div>
      <div className={yearStyles.yearContainer}>
        <div className={yearStyles.description}>
          <h3 className={yearStyles.title}>{title}</h3>
          <p className={yearStyles.para}>
            {subtitle}
          </p>
        </div>
        <div className={yearStyles.yearIcon}>
          <Image
            src={icon} 
            alt="year icon"
            layout="fill"
            objectPosition="center"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Year;
