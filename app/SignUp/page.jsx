"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState("");

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
    setErrorMessage("");
    const response = await fetch("/api/User", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ formData }),
    });
    if (!response.ok) {
      const error = await response.json();
      setErrorMessage(error.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <form
      action="POST"
      className="flex flex-col gap-6 items-center justify-center mt-28"
      onSubmit={handleSubmit}
    >
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
        onChange={handleChange}
        className="w-1/2 bg-[#e2e2e2] p-4 rounded-xl outline-none"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Your password..."
        onChange={handleChange}
        className="w-1/2 bg-[#e2e2e2] p-4 rounded-xl outline-none"
      />
      <div>
        <button className="bg-[#DBDAD6] text-[#464644] py-3 px-4 rounded-xl hover:text-[#FFFFFF] hover:bg-[#464644]">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Page;
