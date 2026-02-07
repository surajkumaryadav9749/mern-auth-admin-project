import React from "react";
import { useState, useEffect } from "react";
// import { useDispatch } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const dispatch = useDispatch();

  //handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData: ", formData);
    setFormData({ username: "", email: "", password: "" });
  };
  return (
    <section className="h-screen flex items-start pt-8 justify-center gap-4 bg-gray-900">
      <div className="register-img w-[40vw] h-[60vh] bg-green-400"></div>
      <div className="register-form w-[40vw] h-[80vh] flex flex-col gap-8 items-start justify-start pl-16">
        <h1 className="text-3xl font-bold text-white">Registration Form</h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-start justify-center flex-col gap-3 "
        >
          <div className="flex flex-col ">
            <label
              className="text-white font-medium text-sm"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              id="username"
              className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-white font-medium text-sm"
              htmlFor="password"
            >
              Password{" "}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 "
            />
          </div>

          <button className="rounded mt-2 bg-orange-400 font-medium text-sm text-center px-4 py-2 text-white">
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
