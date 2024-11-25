import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-bg bg-inherit overflow-auto">
      <div className="about-image bg-[url('@media/about-background.jpg')] h-[90vh] bg-cover bg-center flex flex-wrap justify-start sm:justify-center">
        <div className="about-title-div ">
          <h1 className="page-title text-white text-5xl sm:text-7xl md:text-8xl mt-36">
            About
          </h1>
        </div>
        <div className="about-subtitle w-screen flex flex-wrap justify-center mt-10 pt-3">
          <p className="about-description-p text-justify bg-background mx-8 sm:mx-16 mb-8 px-6 md:px-20 lg:px-28 py-8 min-w-xs max-w-4xl md:text-xl">
            The Metropolitan Museum of Art presents over 5,000 years of art from
            around the world for everyone to experience and enjoy. The Museum
            lives in two iconic sites in New York City—The Met Fifth Avenue and
            The Met Cloisters. Millions of people also take part in The Met
            experience online. Since its founding in 1870, The Met has always
            aspired to be more than a treasury of rare and beautiful objects.
            Every day, art comes alive in the Museum's galleries and through its
            exhibitions and events, revealing new ideas and unexpected
            connections across time and across cultures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
