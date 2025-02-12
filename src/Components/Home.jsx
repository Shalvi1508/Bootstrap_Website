import React from "react";
import keyboard from "../Images/keyboard.jpg";
import code from "../Images/code.jpg";
import colorlaptop from "../Images/colorlaptop.jpg";
import f1 from "../Images/f1.jpg";
import f2 from "../Images/f2.jpg";
import f3 from "../Images/f3.jpg";
import f4 from "../Images/f4.jpg";

const Home = () => {
  return (
    <>
      {/* Carousel Section */}
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={colorlaptop}
                className="d-block w-100"
                alt="coding"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>The Ultimate Coding Machine: Your Laptop Awaits</h2>
                <p>
                  Your Laptop isn’t just a laptop — it’s a powerhouse that
                  brings your programming ideas to life. With its sleek design
                  and performance that never quits, it’s the perfect companion
                  for any coder on the go. At iCoder, we’re here to provide the
                  tools and support to help you harness the full potential of
                  your Laptop and take your coding journey to new heights.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={code}
                className="d-block w-100"
                alt="coding"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Empowering Coders, One Line at a Time</h2>
                <p>
                  At iCoder, we believe in creating a space where every
                  programmer can thrive. Whether you’re coding on your Desktop,
                  working on a laptop, or collaborating with others, we provide
                  the tools, resources, and inspiration to push your skills
                  further. Join us, and take your programming journey to the
                  next level!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={keyboard}
                className="d-block w-100"
                alt="coding"
                style={{ objectFit: "cover", height: "500px" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h2>Code Unleashed: The Power of Every Keystroke</h2>
                <p>
                  At iCoder, we know that every line of code tells a story —
                  your story. Whether you're crafting intricate algorithms or
                  designing the next big app, the possibilities are endless.
                  With your laptop as your canvas, you hold the key to
                  transforming ideas into digital reality. Dive into the world
                  of coding where every keystroke sparks innovation.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-fluid my-4">
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Innovation
                </strong>
                <h3 className="mb-0">Shaping Tomorrow</h3>
                <p className="mb-auto">
                  A futuristic interface with holograms of AI, blockchain, and
                  quantum computing, reflecting iCoder’s vision of embracing
                  cutting-edge technology.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="350"
                  height="250"
                  src={f1}
                  alt="programming"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Inspiration
                </strong>
                <h3 className="mb-0">Inspired by Ideas</h3>
                <p className="mb-auto">
                  A cozy corner with a steaming coffee and a glowing blog post,
                  representing the thoughtful content and insights shared on
                  iCoder.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="350"
                  height="250"
                  src={f2}
                  alt="programming"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Essentials
                </strong>
                <h3 className="mb-0">Essential Tools</h3>
                <p className="mb-auto">
                  A creative toolbox of icons for React, Node.js, Python, and
                  Git, showcasing the key technologies that empower iCoder's
                  community of developers.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="350"
                  height="250"
                  src={f3}
                  alt="programming"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">
                  Productivity
                </strong>
                <h3 className="mb-0">Innovative WorkSpace</h3>
                <p className="mb-auto">
                  A glimpse into a programmer's vibrant setup featuring dynamic
                  code and project dashboards, reflecting iCoder's commitment to
                  providing tools for success.
                </p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  className="bd-placeholder-img"
                  width="350"
                  height="250"
                  src={f4}
                  alt="programming"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
