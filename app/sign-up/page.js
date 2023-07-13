'use client'
import React, { useState, useRef, useEffect } from 'react';
import LimeButton from '../components/UI/LimeButton';
import { FiEye, FiEyeOff } from 'react-icons/fi'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setIsModalOpen(true);
      return; // Stop form submission
    }

    await fetch("https://movie-booking-f84f4-default-rtdb.asia-southeast1.firebasedatabase.app/user-data.json",{
      method: "POST",
      body: JSON.stringify({
        name: formData.name,
        age: formData.age,
        email: formData.email,
        password: formData.password,
        balance: 500000,
      })
    })
    console.log(formData);
    // Reset form fields 
    setFormData({
      name: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center mt-24">
      <div className="w-80 bg-gray-800 p-6 border-2 border-lime-500 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-white">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
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
          <div>
            <label htmlFor="confirmPassword" className="block text-white">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="border border-gray-600 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-lime-500 bg-gray-700 text-white"
            />
          </div>
          <LimeButton type="submit">Sign Up</LimeButton>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg" ref={modalRef}>
            <h2 className="text-xl font-bold mb-2">Error</h2>
            <p className="text-red-500 mb-4">Password and Confirm Password must match.</p>
            <button className="px-4 py-2 bg-lime-500 text-white rounded-lg" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;


