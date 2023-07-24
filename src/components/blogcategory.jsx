import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BlogCategory = ({ category, data }) => {
  console.log("data:", data);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: data.length < 3 ? data.length : 3,
    slidesToScroll: 1,
  };

  console.log("sliderSettings:", sliderSettings);

  // Conditional rendering for fallback content when data is empty or null
  if (!data || data.length === 0) {
    return (
      <div className="technology blog-div row">
        <h1 className="heading">{category}</h1>
        <p>No data available.</p>
      </div>
    );
  }

  return (
    <div className="technology blog-div row">
      <h1 className="heading">{category}</h1>
      <Slider {...sliderSettings}>
        {data.map((post, index) => (
          <div key={index}>
            <div className="card">
              <Link to={`/Singleblog/${post.id}`} className="link">
                <img
                  src={`../upload/${post.img}`}
                  className="card-img-top"
                  alt={post.title} // Add descriptive alt text for the image
                />
                <div className="card-body">
                  <p className="card-text">{post.title}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCategory;
