import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ category }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?category=${category}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="menu">
      <h1 className="heading">Other posts you may like</h1>
      {posts.map((post) => (
        <Link className="link" to={`/Singleblog/${post.id}`}>
          <div className="post" key={post.id}>
            <img src={`../upload/${post.img}`} alt="" />
            <h2 className="title">{post.title}</h2>
            <button>Read More</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
