"use client";

import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const formData = [
  { name: "First Name", type: "text" },
  { name: "Last Name", type: "text" },
  { name: "Email", type: "email" },
  { name: "Job Title", type: "text" },
  { name: "Company Size", type: "text" },
];

export function Form() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div className="card max-w-xl shadow-2xl bg-white bg-opacity-40 backdrop-blur-md w-full border border-gray-200 p-4 sm:p-10 mt-28 md:mt-0">
      <h4 className="text-center" data-aos="fade-up">
        First things first
      </h4>
      <p
        data-aos="fade-up"
        className="text-xl my-4 text-center w-3/4 self-center"
      >
        We want to serve you better. Tell us a bit about yourself or company
      </p>
      <div
        data-aos="fade-up"
        className="border border-gray-200 rounded-lg p-2 flex gap-2"
      >
        <button className="btn border-none outline-none bg-primary text-gray-200 hover:text-black rounded-lg flex-1 lowercase">
          Individual
        </button>
        <button className="btn border-none outline-none bg-gray-200 rounded-lg flex-1 lowercase">
          Company
        </button>
      </div>
      <input
        data-aos="fade-up"
        type="text"
        placeholder={"username"}
        className="h-12 border bg-white border-gray-400 rounded-xl px-4 mt-6"
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* {formData.map((item, idx) => (
        <input
          data-aos="fade-up"
          key={idx}
          type={item.type}
          placeholder={item.name}
          className="h-12 border bg-white border-gray-400 rounded-xl px-4 mt-6"
        />
      ))} */}
      <button
        data-aos="fade-up"
        onClick={() => dispatch(logIn(username))}
        className="bg-primary btn rounded-full mt-10 text-white hover:text-black"
      >
        Login
      </button>
      <button
        data-aos="fade-up"
        onClick={() => dispatch(logOut())}
        className="bg-secondary btn rounded-full mt-10 text-white hover:text-black"
      >
        Logout
      </button>
      <button
        data-aos="fade-up"
        onClick={() => dispatch(toggleModerator())}
        className="btn bg-info rounded-full mt-10 text-white hover:text-black"
      >
        Toggle modrator state
      </button>
    </div>
  );
}
