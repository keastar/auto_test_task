import React from "react";
import css from "./About.module.css";
import cars from "../../images/cars.jpg";

const About = () => {
  return (
    <main className={css.about}>
      <img src={cars} className={css.img} alt="" />
      <p className={css.aboutMainContent}>
        Welcome to the website for car rental services. Here You may look and
        choose the possible models on the Catalog tab.
      </p>
    </main>
  );
};

export default About;
