"use client";
import React from "react";

function Page() {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
}

  return (
    <form action="POST" className="flex flex-col gap-6 items-center justify-center mt-28">
      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="Your username..."
        onChange={handleChange}
        className="w-1/2 bg-[#e2e2e2] p-4 rounded-xl outline-none"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Your email..."
        className="w-1/2 bg-[#e2e2e2] p-4 rounded-xl outline-none"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Your password..."
        className="w-1/2 bg-[#e2e2e2] p-4 rounded-xl outline-none"
      />
      <div>
        <button>Sign up</button>
      </div>
    </form>
  );
}

export default Page;
