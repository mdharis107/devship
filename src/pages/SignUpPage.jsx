import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
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
    if (data.password != data.confirm_password) {
      return alert("password doest not match");
    } else {
      axios
        .post("http://localhost:8080/user/signup", {
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
          password: data.password,
          email: data.email,
        })
        .then((res) => {
          console.log(res.data.msg);
          navigate("/login");
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err.response.data.msg);
        });
    }
    // console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            name="first_name"
            onChange={handleChange}
            type="text"
            placeholder="Enter the first name"
          />
        </div>
        <div>
          <input
            name="last_name"
            onChange={handleChange}
            type="text"
            placeholder="Enter the last Name"
          />
        </div>
        <div>
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Enter the username"
          />
        </div>
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
          <input
            name="confirm_password"
            onChange={handleChange}
            type="text"
            placeholder="Confirm password"
            minLength={6}
          />
        </div>
        <div>
          <button type="submit"> SUBMIT </button>
        </div>

        <div>
          <Link to="/login"> login Page </Link>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
