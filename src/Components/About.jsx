import React from "react";
import about1 from "../Images/about1.jpg";
import about2 from "../Images/about2.jpg";
import about3 from "../Images/about3.jpg";

const About = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row featurette d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Why Was iCoder Started?
          </h2>
          <h3 className="mt-4">"Bridging the Gap in Programming Resources"</h3>
          <p className="lead">
            iCoder was founded to bridge the gap in programming resources,
            helping developers overcome challenges by connecting them to the
            right tools, knowledge, and community. Like a bridge made of code
            snippets uniting two cliffs, iCoder symbolizes a haven for
            programmers seeking guidance and collaboration.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={about1}
            alt="Bridging the Gap in Programming Resources"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "70vh", // Ensure it takes up a substantial portion of the viewport height
            }}
          />
        </div>
      </div>

      <div className="row featurette d-flex justify-content-center align-items-center my-4">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Motivation for iCoder
          </h2>
          <h3 className="mt-4">"Igniting the Spark"</h3>
          <p className="lead">
            The spark behind iCoder is the passion for programming and
            creativity. Like a glowing ember transforming into a blazing fire,
            iCoder inspires programmers to innovate, providing a platform that
            fosters growth, collaboration, and the pursuit of ideas.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={about2}
            alt="Igniting the Spark"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "70vh", // Maintain the same height as other images
            }}
          />
        </div>
      </div>

      <div className="row featurette d-flex justify-content-center align-items-center my-4">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Goal for iCoder</h2>
          <h3 className="mt-4">"Shaping the Future of Programmers"</h3>
          <p className="lead">
            iCoder aims to empower programmers and nurture talent by building a
            global community of innovators. Like a futuristic skyline of binary
            patterns lit by a rising sun, iCoder symbolizes hope, progress, and
            a bright future for developers worldwide.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={about3}
            alt="Shaping the Future of Programmers"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "70vh", // Keep consistency across the images
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
