import Year from "../../components/about/Year";
import aboutStyles from "../../styles/About.module.scss";
import { yearsContents } from "../../libs/about/years";
import Hero from "../../components/about/Hero";
import { getStrapiURL, fetchAPI } from "@libs/api";

const About = ({ years }) => {
  return (
    <div className={aboutStyles.container}>
      <Hero />
      <div className={aboutStyles.body}>
        <div className={aboutStyles.aboutContainer}>
          <h2 className={aboutStyles.subtitle}>Lịch sử hình thành</h2>
          <p className={aboutStyles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Hendrerit dignissim sapien urna consectetur amet, ipsum
            porttitor porta nibh. Amet dui at etiam convallis. Nunc
            congue sit egestas ac cursus nunc ac euismod enim. Ut
            bibendum arcu, amet, donec malesuada odio faucibus. At
            gravida diam vivamus amet. Sit aenean massa vel velit
            velit adipiscing. Vitae, posuere cras nam duis nulla est.
            Vel feugiat nisl amet et. Sed netus vel lorem cras nulla
            vestibulum risus justo, vitae. Eget nibh dolor malesuada
            risus scelerisque mauris purus pharetra.
          </p>
          <div className={aboutStyles.yearContainer}>
            {years.map((year) => (
              <Year
                key={year["id"]}
                year={year["year"]}
                title={year["description"]}
                subtitle={yearsContents["2018"].subtitle}
                icon={yearsContents["2018"].icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const years = await fetchAPI(`clubs`);

  return {
    props: { years },
  };
}

export default About;
