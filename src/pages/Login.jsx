import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.scss";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };
  return (
    <div className="register p-4">
      <div className="register-content row">
        <div
          md="6"
          className="col text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Welcome Back: <br />
            <span className="text-primary">
              Login to Your Blogging Account{" "}
            </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Welcome back to our blogging website! Please login below to continue
            sharing your thoughts and ideas with our community. New to our
            website? Register for an account to join us. We're excited to have
            you be a part of our community!
          </p>
        </div>

        <div className="my-5 col-lg-6 col-md-6 col-mb-12">
          <div className="card p-4 text-center">
            <form>
              <div class="form-outline">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Email Id"
                  onChange={handleChange}
                  required
                />
              </div>

              <div class="form-outline py-4">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                name="submit"
                className=" button btn btn-primary btn-block center mb-4">
                Login
              </button>
              {err && <p>{err}</p>}
              <p>
                Don't have an account yet? <a href="register"> Register Now</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
