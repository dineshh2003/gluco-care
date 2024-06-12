"use client"
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Head from 'next/head';
import React from 'react';
import { useState,useEffect } from 'react';

export default function Home() {

   // State to manage the current index of the carousel
   const [currentIndex, setCurrentIndex] = useState(0);
   // State for interval
   const [intervalId, setIntervalId] = useState(null);
 
   // Array of image URLs
   const images = [
     '1.jpg',
     '2.jpg',
     '3.jpg'
   ];
 
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
     clearInterval(intervalId);
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
        {/* Placeholder for the login form */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
              <RegisterLink>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
              </RegisterLink>
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
}
