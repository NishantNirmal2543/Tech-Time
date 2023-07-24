import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="home page">
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post row g-5" key={post.id}>
              <div className="image col-lg-5 col-md-6 col-mb-12">
                <div className="img">
                  <img src={`../upload/${post.img}`} alt="" />
                  <div className="fal">
                    <Link className="link" to={`/Singleblog/${post.id}`}>
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="content col-lg-7 col-md-6 col-mb-12">
                <Link className="link" to={`/Singleblog/${post.id}`}>
                  <h1 className="title">{post.title}</h1>
                </Link>
                <p>{getText(post.description)}</p>
                <Link className="link" to={`/Singleblog/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
