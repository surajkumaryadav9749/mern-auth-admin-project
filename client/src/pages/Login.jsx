import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <section className="h-screen flex items-start pt-8 justify-center gap-4 bg-gray-900">
      <div className="login-img w-[40vw] h-[60vh] bg-green-400"></div>

      <div className="login-form w-[40vw] h-[80vh] flex flex-col gap-8 items-start justify-start pl-16">
        <h1 className="text-3xl font-bold text-white">Login</h1>

        <form
          onSubmit={handleSubmit}
          className="flex items-start justify-center flex-col gap-3"
        >
          {/* Email */}
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
              className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 text-white"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label
              className="text-white font-medium text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              className="w-[28vw] px-3 py-2 rounded outline-none bg-gray-700 border border-gray-700 text-white"
            />
          </div>

          <button className="rounded mt-2 bg-orange-400 hover:bg-orange-500 transition font-medium text-sm px-4 py-2 text-white">
            Login Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
