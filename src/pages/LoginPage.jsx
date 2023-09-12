import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/user/login", {
        // username: data.username,
        password: data.password,
        email: data.email,
      })
      .then((res) => {
        console.log(res.data.msg);
        navigate("/home");
        alert(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });

    // console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {/* <div>
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Enter the username"
          />
        </div> */}
        <div>
          <input
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="Enter the email"
          />
        </div>
        <div>
          <input
            name="password"
            onChange={handleChange}
            type="text"
            placeholder="Enter the password"
            minLength={6}
          />
        </div>

        <div>
          <button type="submit"> SUBMIT </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
