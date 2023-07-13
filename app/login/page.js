"use client";
import React, { useState, useRef } from "react";
import LimeButton from "../components/UI/LimeButton";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = loginForm;
      const response = await fetch(
        "https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/user-data.json"
      );
      const userData = await response.json();
      const userId = Object.keys(userData).find(
        (key) =>
          userData[key].email === email && userData[key].password === password
      );
      if (userId) {
        const user = userData[userId];
        console.log("User authenticated:", user);
        // Reset the form
        setLoginForm({ email: "", password: "" });
      } else {
        // User authentication failed
        console.error("Authentication failed: Invalid email or password");
      }
    } catch (error) {
      // Error occurred while fetching or processing data
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center mt-24">
      <div className="w-80 bg-gray-800 p-6 border-2 border-lime-500 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
                required
                className="border border-gray-600 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-700 text-white pr-10"
                ref={passwordInputRef}
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()} // Prevents the input focus change on eye icon click
              >
                {showPassword ? (
                  <FiEyeOff size={20} color="white" />
                ) : (
                  <FiEye size={20} color="white" />
                )}
              </div>
            </div>
          </div>

          <LimeButton type="submit">LOGIN</LimeButton>
        </form>
      </div>
    </div>
  );
}
