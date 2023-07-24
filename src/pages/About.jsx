import React from "react";
import aboutbg from "../images/aboutbg.png";
import AI from "../images/AI.jpg";
import space from "../images/space.jpg";
import cs from "../images/CS.jpg";
import emerging from "../images/emerging.jpg";
import tech from "../images/tech.jpg";

import "../style.scss";

import "react-quill/dist/quill.snow.css";
import { ContactUs } from "../components/Contact";

const About = () => {
  return (
    <div className="about page">
      <img className="img" src={aboutbg} alt="about"></img>
      <div className="about-us">
        <h1 className="heading">About Us</h1>
        <p>
          Welcome to our blogging website! We are passionate about sharing
          knowledge, experiences, and ideas through the power of written words.
          Our platform serves as a hub for writers, enthusiasts, and curious
          minds alike.
        </p>
        <p>
          Our mission is to provide a space where individuals can express
          themselves, engage with meaningful content, and foster discussions.
          Whether you're a seasoned writer or new to blogging, we invite you to
          join our community and embark on a journey of discovery, creativity,
          and connection.
        </p>
      </div>

      <div className="website-desc">
        <h3 className="heading">What You'll Find Here</h3>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active white-button"
              aria-current="true"
              aria-label="Slide 1"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              className="white-button"
              aria-label="Slide 2"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              className="white-button"
              aria-label="Slide 3"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              className="white-button"
              aria-label="Slide 4"></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              className="white-button"
              aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={AI} class="d-block w-100 carousel-image" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="title">
                  Artificial Intelligence And Machine Learning
                </h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={space} class="d-block w-100 carousel-image" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="title">Science and Technology</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src={cs} class="d-block w-100 carousel-image" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="title">Cyber Security</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={emerging}
                class="d-block w-100 carousel-image"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="title">Emerging Technologies</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src={tech} class="d-block w-100 carousel-image" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="title">Tech Industry News</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUs />
      <div className="about-end">
        <p>
          Thank you for visiting our blogging website. We are dedicated to
          providing you with inspiration, valuable insights, and the opportunity
          to forge meaningful connections within our tech community. Happy
          reading and stay tuned for exciting tech content!
        </p>
        <p className="flower-emoji">🌸🌸🌸</p>
      </div>
    </div>
  );
};

export default About;
