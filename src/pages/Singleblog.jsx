import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import DOMPurify from "dompurify";

const Singleblog = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single page row g-5">
      <div className="content col-lg-8 col-md-8 col-mb-12">
        <img src={`../upload/${post.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            {post && <span>{post.username}</span>}
            <p>Posted {moment(post.date).fromNow()} </p>
          </div>
          {currentUser !== null && currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <AiFillEdit />
              </Link>
              <div>
                <MdDelete onClick={handleDelete} />
              </div>
            </div>
          )}
        </div>
        <h1 className="title">{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.description),
          }}></p>
      </div>

      <div className="menu col-lg-4 col-md-4 col-mb-12">
        <Menu category={post.category} />
      </div>
    </div>
  );
};

export default Singleblog;
