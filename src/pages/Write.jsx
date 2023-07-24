import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.description || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [category, setCat] = useState(state?.category || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            description: value,
            category,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            description: value,
            category,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write page row g-5">
      <div className="content col-lg-8 col-md-7 col-mb-12">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu col-lg-4 col-md-5 col-mb-12">
        <div className="item">
          <h1>Publish</h1>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={category === "AIML"}
              name="cat"
              value="AIML"
              id="AIML"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="AIML">
              Artificial Intelligence and Machine Learning
            </label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "cybersecurity"}
              name="cat"
              value="cybersecurity"
              id="cybersecurity"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cybersecurity">Cyber Security</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "sciencetechnology"}
              name="cat"
              value="sciencetechnology"
              id="sciencetechnology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="sciencetechnology">Science And Technology</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "industrynews"}
              name="cat"
              value="industrynews"
              id="industrynews"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="industrynews">Tech Industry News</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={category === "emergingtechnologies"}
              name="cat"
              value="emergingtechnologies"
              id="emergingtechnologies"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="emergingtechnologies">Emerging Technologies</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
