import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlogCategory from "../components/blogcategory";

const Blog = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response1 = await axios.get("/posts?category=AIML");
      const response2 = await axios.get("/posts?category=cybersecurity");
      const response3 = await axios.get("/posts?category=sciencetechnology");
      const response4 = await axios.get("/posts?category=industrynews");
      const response5 = await axios.get("/posts?category=emergingtechnologies");

      setData([
        response1.data,
        response2.data,
        response3.data,
        response4.data,
        response5.data,
      ]);
      setIsLoading(false); // Data fetching is complete
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setIsLoading(false); // Data fetching is complete, but with an error
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show an error message if there was an issue with data fetching
  }

  return (
    <div className="Blog page">
      <div>
        <BlogCategory
          category="Artificial Intelligence and Machine Learning"
          data={data[0]}
        />
      </div>
      <div>
        <BlogCategory category="Cyber Security" data={data[1]} />
      </div>
      <div>
        <BlogCategory category="Science And Technology" data={data[2]} />
      </div>
      <div>
        <BlogCategory category="Tech Industry News" data={data[3]} />
      </div>
      <div>
        <BlogCategory category="Emerging Technologies" data={data[4]} />
      </div>
    </div>
  );
};

export default Blog;
