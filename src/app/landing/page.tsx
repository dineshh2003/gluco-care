"use client";
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Landing: React.FC = () => {
  const [loginState, setLoginState] = useState({
    name: '',
    email: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/login', loginState);
      alert("The demand is sent for review from the admin");
      router.push('/api/auth/login'); // Redirect to the Auth0 login page or another appropriate page
    } catch (error) {
      console.error('There was an error saving the user!', error);
    }
  };

  // State to manage the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for interval
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Array of image URLs
  const images = ['1.jpg', '2.jpg', '3.jpg'];

  // Function to handle automatic sliding of images
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration as needed

    // Save the interval id to state
    setIntervalId(id);

    // Clear interval on component unmount
    return () => clearInterval(id);
  }, []);

  // Function to handle hover pause
  const handleHover = () => {
    // Pause the carousel on hover
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  // Function to handle hover resume
  const handleMouseLeave = () => {
    // Resume the carousel on mouse leave
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration as needed
    setIntervalId(id);
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 via-black to-blue-800 min-h-screen flex items-center justify-center">
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page with gradient background" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white rounded-lg shadow-lg p-8 w-[70rem] h-[30rem] grid grid-cols-2">
        {/* Left side for image carousels */}
        <div className="relative w-full h-full bg-gray-200 rounded-lg" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
          {/* Image carousel */}
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute w-full h-full ${index === currentIndex ? '' : 'hidden'}`}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>

        {/* Right side for login form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={loginState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={loginState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
